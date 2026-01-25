"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  authorImage?: string;
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

// Categories for the filter
const categories = [
  "Alle",
  "Fütterung",
  "Haltung",
  "Gesundheit",
  "Verhalten",
  "Training",
  "Pflege",
];

export default function BlogPage() {
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostMeta[]>([]);
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Fetch posts on client side
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/posts");
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
          setFilteredPosts(data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  // Filter posts based on category and search
  const filterPosts = useCallback(() => {
    let result = posts;

    // Filter by category
    if (activeCategory !== "Alle") {
      result = result.filter(
        (post) =>
          post.frontmatter.category.toLowerCase() ===
          activeCategory.toLowerCase()
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.frontmatter.title.toLowerCase().includes(query) ||
          post.frontmatter.description.toLowerCase().includes(query) ||
          post.frontmatter.tags?.some((tag) =>
            tag.toLowerCase().includes(query)
          )
      );
    }

    setFilteredPosts(result);
  }, [posts, activeCategory, searchQuery]);

  useEffect(() => {
    filterPosts();
  }, [filterPosts]);

  // Format date helper
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("de-DE", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      {/* Header */}
      <section className="bg-bg-light py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl text-loam-900 mb-4">
            Blog
          </h1>
          <p className="text-xl text-loam-600 max-w-2xl">
            Evidenzbasiertes Wissen für verantwortungsvolle Pferdebesitzer.
            Fundiert recherchiert, verständlich erklärt.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-loam-100 sticky top-[72px] bg-white z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-sage-600 text-white"
                      : "bg-loam-100 text-loam-600 hover:bg-loam-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Suchen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-loam-200 rounded-full focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-loam-400"
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
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            // Loading State
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-paper rounded-2xl overflow-hidden border border-loam-100 animate-pulse"
                >
                  <div className="aspect-[16/10] bg-loam-100" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-loam-100 rounded w-20" />
                    <div className="h-6 bg-loam-100 rounded w-full" />
                    <div className="h-4 bg-loam-100 rounded w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            // Empty State
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-loam-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-loam-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-loam-900 mb-2">
                Keine Artikel gefunden
              </h3>
              <p className="text-loam-600 mb-6">
                {searchQuery
                  ? `Keine Artikel für "${searchQuery}" gefunden.`
                  : "In dieser Kategorie gibt es noch keine Artikel."}
              </p>
              <button
                onClick={() => {
                  setActiveCategory("Alle");
                  setSearchQuery("");
                }}
                className="text-sage-600 hover:text-sage-700 font-medium"
              >
                Alle Artikel anzeigen
              </button>
            </div>
          ) : (
            // Posts Grid
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="bg-paper rounded-2xl overflow-hidden border border-loam-100 hover:shadow-lg transition-shadow h-full flex flex-col">
                    {/* Image */}
                    {post.frontmatter.image && (
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={post.frontmatter.image}
                          alt={
                            post.frontmatter.imageAlt || post.frontmatter.title
                          }
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {post.frontmatter.featured && (
                          <span className="absolute top-4 left-4 bg-gold-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Meta */}
                      <div className="flex items-center gap-3 text-sm text-loam-500 mb-3">
                        <span className="text-sage-600 font-medium">
                          {post.frontmatter.category}
                        </span>
                        <span>•</span>
                        <span>{formatDate(post.frontmatter.date)}</span>
                      </div>

                      {/* Title */}
                      <h2 className="font-serif text-xl text-loam-900 mb-2 group-hover:text-sage-700 transition-colors line-clamp-2">
                        {post.frontmatter.title}
                      </h2>

                      {/* Description */}
                      <p className="text-loam-600 text-sm line-clamp-3 flex-1">
                        {post.frontmatter.description}
                      </p>

                      {/* Author & Reading Time */}
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-loam-100">
                        <div className="flex items-center gap-2">
                          {post.frontmatter.authorImage ? (
                            <Image
                              src={post.frontmatter.authorImage}
                              alt={post.frontmatter.author}
                              width={24}
                              height={24}
                              className="rounded-full"
                            />
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-sage-600 flex items-center justify-center text-white text-xs">
                              {post.frontmatter.author.charAt(0)}
                            </div>
                          )}
                          <span className="text-sm text-loam-600">
                            {post.frontmatter.author}
                          </span>
                        </div>
                        {post.frontmatter.readingTime && (
                          <span className="text-sm text-loam-500">
                            {post.frontmatter.readingTime}
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-20 bg-sage-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-4">
            Kein Artikel mehr verpassen
          </h2>
          <p className="text-loam-600 mb-8">
            Melde dich für unseren Newsletter an und erhalte neue Artikel direkt
            in dein Postfach.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Deine E-Mail-Adresse"
              className="flex-1 px-4 py-3 border border-loam-200 rounded-full focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-sage-600 text-white px-6 py-3 rounded-full hover:bg-sage-700 transition-colors font-medium whitespace-nowrap"
            >
              Anmelden
            </button>
          </form>
          <p className="text-sm text-loam-500 mt-4">
            Kein Spam. Jederzeit abbestellbar.
          </p>
        </div>
      </section>
    </>
  );
}
