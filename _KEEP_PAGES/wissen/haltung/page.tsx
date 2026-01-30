"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// ============================================
// Types
// ============================================

interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  imageAlt?: string;
  category: string;
  tags?: string[];
  readingTime?: string;
  featured?: boolean;
}

interface PostMeta {
  slug: string;
  frontmatter: PostFrontmatter;
}

// ============================================
// Article Card Component
// ============================================

function ArticleCard({ post }: { post: PostMeta }) {
  const { slug, frontmatter } = post;

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block bg-paper rounded-2xl border border-loam-100 shadow-soft overflow-hidden hover:shadow-soft-lg transition-shadow"
    >
      {/* Image */}
      <div className="aspect-[16/10] relative overflow-hidden bg-sage-50">
        {frontmatter.image ? (
          <Image
            src={frontmatter.image}
            alt={frontmatter.imageAlt || frontmatter.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-sage-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
        {/* Reading Time Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-loam-700 rounded-full">
            {frontmatter.readingTime || "5 Min."}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl text-loam-900 mb-3 group-hover:text-sage-700 transition-colors line-clamp-2">
          {frontmatter.title}
        </h3>
        <p className="text-loam-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {frontmatter.description}
        </p>
        <span className="text-sage-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
          Lesen
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}

// ============================================
// Page Component
// ============================================

export default function HaltungPage() {
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch posts filtered by category
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/posts");
        if (response.ok) {
          const data = await response.json();
          // Filter by haltung category or related tags
          const filtered = data.filter(
            (post: PostMeta) =>
              post.frontmatter.category.toLowerCase() === "haltung" ||
              post.frontmatter.tags?.some((tag: string) =>
                ["haltung", "offenstall", "box", "paddock", "weide", "stall", "herdenmanagement", "sozialverhalten"].includes(
                  tag.toLowerCase()
                )
              )
          );
          setPosts(filtered);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-bg-light py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <nav className="flex justify-center items-center gap-2 text-sm text-loam-500 mb-6">
            <Link href="/wissen" className="hover:text-sage-600 transition-colors">
              Wissen
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-loam-900 font-medium">Haltung</span>
          </nav>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-loam-900 leading-tight mb-6">
            Haltung &{" "}
            <span className="italic">Stallmanagement</span>
          </h1>
          <p className="text-xl text-loam-600 leading-relaxed max-w-2xl mx-auto">
            Box, Offenstall oder Paddock Trail – jede Haltungsform hat ihre Berechtigung.
            Entscheidend ist, wie du sie gestaltest.
          </p>
        </div>
      </section>

      {/* Key Topics */}
      <section className="py-12 border-b border-loam-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-sage-50">
              <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🏠</span>
              </div>
              <div>
                <h3 className="font-medium text-loam-900 mb-1">Haltungsformen</h3>
                <p className="text-sm text-loam-600">Box, Offenstall, Paddock Trail im Vergleich</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-sage-50">
              <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg">👥</span>
              </div>
              <div>
                <h3 className="font-medium text-loam-900 mb-1">Herdenmanagement</h3>
                <p className="text-sm text-loam-600">Sozialstruktur und Integration</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-sage-50">
              <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🌿</span>
              </div>
              <div>
                <h3 className="font-medium text-loam-900 mb-1">Weidemanagement</h3>
                <p className="text-sm text-loam-600">Pflege, Rotation und Sicherheit</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-sage-50">
              <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🛠️</span>
              </div>
              <div>
                <h3 className="font-medium text-loam-900 mb-1">Stallalltag</h3>
                <p className="text-sm text-loam-600">Routinen und Optimierung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl text-loam-900 mb-8">
            Artikel zum Thema
          </h2>

          {/* Loading State */}
          {isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-paper rounded-2xl overflow-hidden border border-loam-100 animate-pulse"
                >
                  <div className="aspect-[16/10] bg-loam-100" />
                  <div className="p-6 space-y-3">
                    <div className="h-6 bg-loam-100 rounded w-3/4" />
                    <div className="h-4 bg-loam-100 rounded w-full" />
                    <div className="h-4 bg-loam-100 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : posts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-bg-light rounded-2xl">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="font-serif text-xl text-loam-900 mb-2">
                Artikel in Arbeit
              </h3>
              <p className="text-loam-600 mb-6 max-w-md mx-auto">
                Zu diesem Thema arbeite ich gerade an ausführlichen Artikeln.
                Melde dich für den Newsletter an, um nichts zu verpassen.
              </p>
              <Link
                href="/wissen"
                className="text-sage-600 hover:text-sage-700 font-medium inline-flex items-center gap-2"
              >
                Alle Themen entdecken
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Diana Section */}
      <section className="py-16 lg:py-24 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Diana Portrait */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/Diana_Pferdesicht.jpeg"
                  alt="Diana von Pferdesicht"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-4">
                20 Jahre Offenstallmanagement
              </h2>
              <div className="space-y-4 text-loam-600 leading-relaxed">
                <p>
                  Ich habe 20 Jahre lang einen eigenen Offenstall geführt.
                  In dieser Zeit habe ich gelernt: Es gibt keine perfekte Haltungsform –
                  aber es gibt für jedes Pferd die richtige Lösung.
                </p>
                <p className="font-medium text-loam-900">
                  Box oder Offenstall ist nicht die Frage. Die Frage ist:
                  Was braucht DEIN Pferd?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz CTA */}
      <section className="py-16 lg:py-24 bg-sage-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/80 text-sm font-medium uppercase tracking-wide mb-4">
            Frühjahrs-Check
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6">
            Ist dein Management frühlingsfit?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Von Anweiden bis Parasiten – der Frühlings-Check zeigt dir, wo du stehst
            und was du optimieren kannst.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 bg-white text-sage-700 font-semibold px-8 py-4 rounded-full hover:bg-gold-50 transition-colors text-lg"
          >
            Jetzt Quiz starten
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
