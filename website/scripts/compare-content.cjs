#!/usr/bin/env node

/**
 * Content Comparison Script
 * Compares text content between v0 reference and local Next.js site
 */

const https = require('https');
const http = require('http');

// ============================================
// Configuration
// ============================================

const V0_BASE = 'https://v0-pferdesicht-com-9i.vercel.app';
const LOCAL_BASE = 'http://localhost:3000';

const PAGES_TO_COMPARE = [
  { path: '/', name: 'Homepage' },
  { path: '/ueber-diana', name: 'Über Diana' },
];

// ============================================
// Fetch HTML from URL
// ============================================

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;

    client.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

// ============================================
// Extract text content from HTML
// ============================================

function extractHeadings(html) {
  const headings = { h1: [], h2: [], h3: [] };

  // Extract H1
  const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  headings.h1 = h1Matches.map(h => cleanText(h.replace(/<[^>]+>/g, '')));

  // Extract H2
  const h2Matches = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/gi) || [];
  headings.h2 = h2Matches.map(h => cleanText(h.replace(/<[^>]+>/g, '')));

  // Extract H3
  const h3Matches = html.match(/<h3[^>]*>([\s\S]*?)<\/h3>/gi) || [];
  headings.h3 = h3Matches.map(h => cleanText(h.replace(/<[^>]+>/g, '')));

  return headings;
}

function extractParagraphs(html) {
  const pMatches = html.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || [];
  return pMatches
    .map(p => cleanText(p.replace(/<[^>]+>/g, '')))
    .filter(p => p.length > 20); // Only meaningful paragraphs
}

function extractButtons(html) {
  // Extract button/link text (CTAs)
  const buttonMatches = html.match(/<(?:button|a)[^>]*class="[^"]*(?:button|btn|cta)[^"]*"[^>]*>([\s\S]*?)<\/(?:button|a)>/gi) || [];
  return buttonMatches.map(b => cleanText(b.replace(/<[^>]+>/g, '')));
}

function cleanText(text) {
  return text
    .replace(/\s+/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();
}

// ============================================
// Compare two arrays of strings
// ============================================

function compareArrays(v0Arr, localArr, label) {
  const differences = [];

  // Find items in v0 but not in local
  const missingInLocal = v0Arr.filter(item =>
    !localArr.some(local => normalizeForComparison(local) === normalizeForComparison(item))
  );

  // Find items in local but not in v0
  const extraInLocal = localArr.filter(item =>
    !v0Arr.some(v0 => normalizeForComparison(v0) === normalizeForComparison(item))
  );

  // Find similar but different items
  const similar = [];
  for (const v0Item of v0Arr) {
    for (const localItem of localArr) {
      const similarity = calculateSimilarity(v0Item, localItem);
      if (similarity > 0.5 && similarity < 0.95) {
        similar.push({ v0: v0Item, local: localItem, similarity: Math.round(similarity * 100) });
      }
    }
  }

  return { missingInLocal, extraInLocal, similar };
}

function normalizeForComparison(str) {
  return str.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ').trim();
}

function calculateSimilarity(str1, str2) {
  const s1 = normalizeForComparison(str1);
  const s2 = normalizeForComparison(str2);

  if (s1 === s2) return 1;

  const words1 = new Set(s1.split(' '));
  const words2 = new Set(s2.split(' '));

  const intersection = [...words1].filter(w => words2.has(w)).length;
  const union = new Set([...words1, ...words2]).size;

  return intersection / union;
}

// ============================================
// Generate Report
// ============================================

function generateReport(pageName, v0Content, localContent) {
  const report = [];

  report.push(`\n${'='.repeat(60)}`);
  report.push(`📄 ${pageName}`);
  report.push(`${'='.repeat(60)}\n`);

  // Compare headings
  for (const level of ['h1', 'h2', 'h3']) {
    const diff = compareArrays(v0Content.headings[level], localContent.headings[level], level.toUpperCase());

    if (diff.missingInLocal.length || diff.extraInLocal.length || diff.similar.length) {
      report.push(`\n### ${level.toUpperCase()} Headings\n`);

      if (diff.missingInLocal.length) {
        report.push(`❌ Fehlt in Local (vorhanden in v0):`);
        diff.missingInLocal.forEach(h => report.push(`   - "${h}"`));
      }

      if (diff.extraInLocal.length) {
        report.push(`➕ Zusätzlich in Local (nicht in v0):`);
        diff.extraInLocal.forEach(h => report.push(`   - "${h}"`));
      }

      if (diff.similar.length) {
        report.push(`🔄 Ähnlich aber unterschiedlich:`);
        diff.similar.forEach(s => {
          report.push(`   v0:    "${s.v0}"`);
          report.push(`   local: "${s.local}"`);
          report.push(`   (${s.similarity}% ähnlich)\n`);
        });
      }
    } else {
      report.push(`✅ ${level.toUpperCase()}: Alle Überschriften stimmen überein`);
    }
  }

  // Compare key paragraphs (first 10)
  const v0Paragraphs = v0Content.paragraphs.slice(0, 15);
  const localParagraphs = localContent.paragraphs.slice(0, 15);

  const pDiff = compareArrays(v0Paragraphs, localParagraphs, 'Paragraphs');

  if (pDiff.missingInLocal.length || pDiff.similar.length) {
    report.push(`\n### Paragraphen\n`);

    if (pDiff.missingInLocal.length) {
      report.push(`❌ Texte die in v0 sind aber nicht in Local:`);
      pDiff.missingInLocal.slice(0, 5).forEach(p => {
        report.push(`   - "${p.substring(0, 80)}${p.length > 80 ? '...' : ''}"`);
      });
      if (pDiff.missingInLocal.length > 5) {
        report.push(`   ... und ${pDiff.missingInLocal.length - 5} weitere`);
      }
    }

    if (pDiff.similar.length) {
      report.push(`\n🔄 Ähnliche Texte mit Unterschieden:`);
      pDiff.similar.slice(0, 3).forEach(s => {
        report.push(`   v0:    "${s.v0.substring(0, 60)}..."`);
        report.push(`   local: "${s.local.substring(0, 60)}..."`);
        report.push(``);
      });
    }
  } else {
    report.push(`\n✅ Paragraphen: Haupttexte stimmen überein`);
  }

  // Summary stats
  report.push(`\n### Statistik`);
  report.push(`   v0:    ${v0Content.headings.h1.length} H1, ${v0Content.headings.h2.length} H2, ${v0Content.headings.h3.length} H3, ${v0Content.paragraphs.length} Paragraphen`);
  report.push(`   Local: ${localContent.headings.h1.length} H1, ${localContent.headings.h2.length} H2, ${localContent.headings.h3.length} H3, ${localContent.paragraphs.length} Paragraphen`);

  return report.join('\n');
}

// ============================================
// Main
// ============================================

async function main() {
  console.log('🔍 Pferdesicht Content Comparison\n');
  console.log(`v0 Reference: ${V0_BASE}`);
  console.log(`Local:        ${LOCAL_BASE}\n`);

  const fullReport = [];
  fullReport.push('# Content Vergleich: v0 vs Local Next.js\n');
  fullReport.push(`Erstellt: ${new Date().toLocaleString('de-DE')}\n`);

  for (const page of PAGES_TO_COMPARE) {
    console.log(`📄 Vergleiche ${page.name} (${page.path})...`);

    try {
      // Fetch both versions
      const [v0Html, localHtml] = await Promise.all([
        fetchPage(`${V0_BASE}${page.path}`),
        fetchPage(`${LOCAL_BASE}${page.path}`)
      ]);

      // Extract content
      const v0Content = {
        headings: extractHeadings(v0Html),
        paragraphs: extractParagraphs(v0Html),
        buttons: extractButtons(v0Html)
      };

      const localContent = {
        headings: extractHeadings(localHtml),
        paragraphs: extractParagraphs(localHtml),
        buttons: extractButtons(localHtml)
      };

      // Generate report for this page
      const pageReport = generateReport(page.name, v0Content, localContent);
      fullReport.push(pageReport);

      console.log(`   ✅ Fertig\n`);

    } catch (error) {
      console.log(`   ❌ Fehler: ${error.message}\n`);
      fullReport.push(`\n❌ ${page.name}: Konnte nicht verglichen werden (${error.message})`);
    }
  }

  // Print full report
  console.log('\n' + '='.repeat(60));
  console.log('📊 VOLLSTÄNDIGER REPORT');
  console.log('='.repeat(60));
  console.log(fullReport.join('\n'));

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📋 ZUSAMMENFASSUNG');
  console.log('='.repeat(60));
  console.log('\nPrüfe den Report oben auf:');
  console.log('  ❌ Fehlende Inhalte in Local');
  console.log('  🔄 Unterschiedliche Formulierungen');
  console.log('  ➕ Zusätzliche Inhalte in Local\n');
}

main().catch(console.error);
