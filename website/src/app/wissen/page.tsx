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
// Categories
// ============================================

const categories = [
  { slug: "alle", label: "Alle Artikel" },
  { slug: "fütterung", label: "Fütterung" },
  { slug: "pflege", label: "Pflege" },
  { slug: "gesundheit", label: "Gesundheit" },
  { slug: "haltung", label: "Haltung" },
  { slug: "allgemein", label: "Allgemein" },
];

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
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-loam-700 rounded-full">
            {frontmatter.category}
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
        <div className="flex items-center justify-between">
          <span className="text-xs text-loam-500">
            {frontmatter.readingTime || "5 Min."} Lesezeit
          </span>
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
      </div>
    </Link>
  );
}

// ============================================
// Featured Article Card
// ============================================

function FeaturedArticleCard({ post }: { post: PostMeta }) {
  const { slug, frontmatter } = post;

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block bg-paper rounded-2xl border border-loam-100 shadow-soft overflow-hidden hover:shadow-soft-lg transition-shadow"
    >
      <div className="grid md:grid-cols-2">
        {/* Image */}
        <div className="aspect-[16/10] md:aspect-auto relative overflow-hidden bg-sage-50">
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
                className="w-16 h-16 text-sage-300"
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
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-center">
          <div className="mb-4">
            <span className="px-3 py-1 bg-sage-100 text-xs font-medium text-sage-700 rounded-full">
              {frontmatter.category}
            </span>
          </div>
          <h3 className="font-serif text-2xl lg:text-3xl text-loam-900 mb-4 group-hover:text-sage-700 transition-colors">
            {frontmatter.title}
          </h3>
          <p className="text-loam-600 leading-relaxed mb-6 line-clamp-3">
            {frontmatter.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-loam-500">
              {frontmatter.readingTime || "5 Min."} Lesezeit
            </span>
            <span className="text-sage-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Artikel lesen
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
        </div>
      </div>
    </Link>
  );
}

// ============================================
// Page Component
// ============================================

export default function WissenPage() {
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const [activeCategory, setActiveCategory] = useState("alle");
  const [isLoading, setIsLoading] = useState(true);

  // Fetch posts from API
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/posts");
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  // Filter posts
  const featuredPosts = posts.filter((p) => p.frontmatter.featured);
  const filteredPosts =
    activeCategory === "alle"
      ? posts.filter((p) => !p.frontmatter.featured)
      : posts.filter(
          (p) =>
            p.frontmatter.category.toLowerCase() === activeCategory &&
            !p.frontmatter.featured
        );

  return (
    <>
      {/* Hero Section */}
      <section className="bg-bg-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-sage-600 uppercase tracking-wide mb-4">
              Wissensbereich
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl text-loam-900 leading-tight mb-6">
              Fundiertes Wissen für dein Pferd
            </h1>
            <p className="text-xl text-loam-600 leading-relaxed">
              Wissen, das ich für dich recherchiert, geprüft und im Stall-Alltag
              getestet habe. Sortiert und verständlich – damit du nicht 47 Tabs
              offen haben musst.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {!isLoading && featuredPosts.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl text-loam-900 mb-8">
              Empfohlene Artikel
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <FeaturedArticleCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter & Articles */}
      <section className="py-12 lg:py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setActiveCategory(category.slug)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-500",
                  activeCategory === category.slug
                    ? "bg-sage-600 text-white"
                    : "bg-paper text-loam-700 hover:bg-sage-100 border border-loam-200"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Loading State */}
          {isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
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
          ) : filteredPosts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-loam-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-loam-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-loam-900 mb-2">
                Noch keine Artikel in dieser Kategorie
              </h3>
              <p className="text-loam-600">
                Hier entstehen bald neue Inhalte. Schau später wieder vorbei!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sage-50 p-8 lg:p-12 rounded-2xl border border-sage-200 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-4">
              Kein Artikel mehr verpassen
            </h2>
            <p className="text-loam-600 mb-8 max-w-xl mx-auto">
              Melde dich für den Newsletter an und erhalte neue Artikel,
              praktische Tipps und exklusive Inhalte direkt in dein Postfach.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Deine E-Mail-Adresse"
                className={cn(
                  "flex-1 px-4 py-3 rounded-lg",
                  "bg-white border border-loam-200",
                  "text-loam-900 placeholder:text-loam-400",
                  "focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                )}
                required
              />
              <button
                type="submit"
                className="tactile-button tactile-button-primary whitespace-nowrap"
              >
                Anmelden
              </button>
            </form>
            <p className="mt-4 text-xs text-loam-500">
              Kein Spam. Jederzeit abmeldbar.{" "}
              <Link href="/datenschutz" className="underline hover:text-sage-600">
                Datenschutz
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Guide CTA */}
      <section className="py-16 lg:py-24 bg-loam-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 text-sm font-medium uppercase tracking-wide mb-4">
            Tiefer einsteigen
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6">
            Du willst mehr als einzelne Artikel?
          </h2>
          <p className="text-xl text-loam-300 mb-10 max-w-2xl mx-auto">
            Mein Frühlings-Guide bietet dir über 25.000 Wörter strukturiertes
            Wissen zu Anweiden, Fellwechsel, Fütterung und Parasiten – alles an
            einem Ort.
          </p>
          <Link
            href="/guides/fruehling"
            className="tactile-button tactile-button-gold"
          >
            Zum Frühlings-Guide
          </Link>
        </div>
      </section>
    </>
  );
}
