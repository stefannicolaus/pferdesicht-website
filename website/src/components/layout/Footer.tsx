"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { footerNavigation, branding } from "@/lib/design-system";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// ============================================
// Social Icons
// ============================================

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// ============================================
// Newsletter Form
// ============================================

function NewsletterForm() {
  return (
    <div className="max-w-md">
      <h3 className="font-serif text-xl text-loam-900 mb-2">
        Wissen direkt ins Postfach
      </h3>
      <p className="text-sm text-loam-600 mb-4">
        Praktische Tipps und fundiertes Wissen für dich und dein Pferd.
      </p>
      <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Deine E-Mail-Adresse"
          className={cn(
            "flex-1 px-4 py-2.5 rounded-lg",
            "bg-white border border-loam-200",
            "text-sm text-loam-900 placeholder:text-loam-400",
            "focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent",
            "transition-shadow"
          )}
          required
        />
        <button
          type="submit"
          className="px-4 py-2.5 bg-loam hover:bg-loam/90 text-white text-sm font-medium rounded-sm transition-colors whitespace-nowrap"
        >
          Anmelden
        </button>
      </form>
      <p className="mt-3 text-xs text-loam-500">
        Mit der Anmeldung akzeptierst du unsere{" "}
        <Link href="/datenschutz" className="underline hover:text-sage-600">
          Datenschutzerklärung
        </Link>
        .
      </p>
    </div>
  );
}

// ============================================
// Footer Logo
// ============================================

function FooterLogo() {
  return (
    <Link href="/" className="inline-flex flex-col group">
      <span className="font-serif text-2xl font-bold italic text-loam-700 group-hover:text-sage-600 transition-colors leading-tight">
        Pferdesicht.com
      </span>
      <span className="text-xs uppercase tracking-wider text-gold-500">
        Vertraue deiner Perspektive
      </span>
    </Link>
  );
}

// ============================================
// Footer Link Section
// ============================================

interface FooterLinkSectionProps {
  title: string;
  links: Array<{
    label: string;
    href: string;
    isExternal?: boolean;
  }>;
}

function FooterLink({ link }: { link: FooterLinkSectionProps["links"][0] }) {
  if (link.isExternal) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "text-sm text-loam-600 hover:text-sage-600 transition-colors",
          "inline-flex items-center gap-1"
        )}
      >
        {link.label}
        <svg
          className="w-3 h-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    );
  }
  return (
    <Link
      href={link.href}
      className="text-sm text-loam-600 hover:text-sage-600 transition-colors"
    >
      {link.label}
    </Link>
  );
}

// Desktop version - static list
function FooterLinkSection({ title, links }: FooterLinkSectionProps) {
  return (
    <div>
      <h4 className="font-medium text-loam-900 mb-4">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <FooterLink link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// Mobile version - accordion
function FooterAccordion() {
  const sections = [
    { title: "Wissen", links: footerNavigation.wissen },
    { title: "Rechtliches", links: footerNavigation.rechtliches },
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {sections.map((section) => (
        <AccordionItem
          key={section.title}
          value={section.title}
          className="border-loam-200"
        >
          <AccordionTrigger className="py-3 text-loam-900 font-medium hover:no-underline">
            {section.title}
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 pb-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

// ============================================
// Main Footer Component
// ============================================

export function Footer() {
  const currentYear = 2025;

  return (
    <footer className="bg-loam/5 border-t border-loam/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <FooterLogo />
            <p className="mt-4 text-sm text-loam-600 max-w-sm">
              {branding.missionFull}
            </p>

            {/* Social Links */}
            <div className="mt-4 md:mt-6 flex items-center gap-4">
              {footerNavigation.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    "bg-loam-100 text-loam-600",
                    "hover:bg-sage-100 hover:text-sage-700 transition-colors",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
                  )}
                  aria-label={social.label}
                >
                  {social.label === "Instagram" && (
                    <InstagramIcon className="w-5 h-5" />
                  )}
                  {social.label === "YouTube" && (
                    <YouTubeIcon className="w-5 h-5" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation - Mobile Accordion */}
          <div className="md:hidden lg:col-span-5">
            <FooterAccordion />
          </div>

          {/* Navigation - Desktop Columns */}
          <div className="hidden md:grid lg:col-span-5 grid-cols-2 gap-8">
            <FooterLinkSection title="Wissen" links={footerNavigation.wissen} />
            <FooterLinkSection
              title="Rechtliches"
              links={footerNavigation.rechtliches}
            />
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3">
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-loam-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-loam-500">
              &copy; {currentYear} {branding.name}. Alle Rechte vorbehalten.
            </p>

            {/* Signature */}
            <p className="text-sm text-loam-600 italic font-serif">
              &ldquo;{branding.signature.text}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
