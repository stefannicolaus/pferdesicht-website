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
  { slug: "alle", label: "ALLE" },
  { slug: "training", label: "TRAINING" },
  { slug: "gesundheit", label: "GESUNDHEIT" },
  { slug: "mindset", label: "MINDSET" },
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

export default function WissenPage() {
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const [activeCategory, setActiveCategory] = useState("alle");
  const [searchQuery, setSearchQuery] = useState("");
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

  // Filter posts by category and search
  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "alle" ||
      post.frontmatter.category.toLowerCase() === activeCategory;

    const matchesSearch =
      !searchQuery ||
      post.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.frontmatter.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      post.frontmatter.tags?.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already reactive through state
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-bg-light py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-loam-900 leading-tight mb-6">
            Entdecke unsere{" "}
            <span className="italic">Themenwelten</span>
          </h1>
          <p className="text-xl text-loam-600 leading-relaxed mb-10">
            Für Pferdemenschen, die hinschauen. Praxiswissen zu Training,
            Gesundheit & Haltung, Mindset & Beziehung.
          </p>

          {/* Search Field */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-loam-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Suchen..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={cn(
                    "w-full pl-12 pr-4 py-4 rounded-full",
                    "bg-white border border-loam-200",
                    "text-loam-900 placeholder:text-loam-400",
                    "focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                  )}
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-loam-900 text-white font-medium rounded-full hover:bg-loam-800 transition-colors"
              >
                SUCHEN
              </button>
            </div>
          </form>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setActiveCategory(category.slug)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-colors",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-500",
                  activeCategory === category.slug
                    ? "bg-loam-900 text-white"
                    : "bg-white text-loam-700 hover:bg-loam-100 border border-loam-200"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-loam-900 mb-2">
                Keine Artikel gefunden
              </h3>
              <p className="text-loam-600 mb-6">
                {searchQuery
                  ? `Keine Ergebnisse für "${searchQuery}".`
                  : "In dieser Kategorie gibt es noch keine Artikel."}
              </p>
              <button
                onClick={() => {
                  setActiveCategory("alle");
                  setSearchQuery("");
                }}
                className="text-sage-600 hover:text-sage-700 font-medium"
              >
                Alle Artikel anzeigen
              </button>
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
                Wissen als Rüstung
              </h2>
              <div className="space-y-4 text-loam-600 leading-relaxed">
                <p>
                  Ich filtere für dich die Wahrheit im Meinungs-Dschungel. Nicht,
                  weil du es nicht selbst könntest – sondern damit du schneller
                  ans Ziel kommst.
                </p>
                <p>
                  Mein Wissen ist über 30 Jahre gewachsen: aus tausenden
                  Expertengesprächen, aktueller Veterinärmedizin und dem, was ich
                  auf die harte Tour lernen musste.
                </p>
                <p className="font-medium text-loam-900">
                  Du bist nicht „zu pingelig". Du schaust hin.
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
            Dein persönlicher Frühlings-Fahrplan
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6">
            Wie fit ist dein Pferd für den Frühling?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Mach den kostenlosen 2-Minuten-Check und erhalte deinen persönlichen
            Fahrplan per E-Mail.
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
