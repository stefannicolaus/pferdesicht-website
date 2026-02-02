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
  { slug: "training", label: "BEWEGUNG & TRAINING" },
  { slug: "gesundheit", label: "GESUNDHEIT & HALTUNG" },
  { slug: "mindset", label: "MENSCH & PFERD" },
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
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Badge */}
        <div className="mb-3">
          <span className="inline-flex items-center px-3 py-1.5 bg-white border border-gold text-loam-700 text-xs font-medium tracking-wide rounded-full">
            {frontmatter.readingTime || "5 Min."} · {frontmatter.category}
          </span>
        </div>

        <h3 className="font-serif text-xl text-loam-900 mb-3 group-hover:text-sage-700 transition-colors line-clamp-2">
          {frontmatter.title}
        </h3>
        <p className="text-loam-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {frontmatter.description}
        </p>
        <span className="text-sage-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
          Weiterlesen
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
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-loam-900 leading-tight mb-6">
            Alle sagen was anderes.{" "}
            <span className="italic text-sage-600">Ich helfe dir dabei, Klarheit zu finden.</span>
          </h1>
          <p className="text-xl text-loam-600 leading-relaxed">
            Das Wissen, das ich gerne früher gehabt hätte. Gefiltert durch 30 Jahre Praxis – damit du nicht mehr raten musst.
          </p>
        </div>
      </section>

      {/* Diana Section */}
      <section className="py-12 lg:py-16 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Bild + Intro */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
              <Image
                src="/images/Diana_Pferdesicht.jpeg"
                alt="Diana von Pferdesicht"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-sage-600 font-medium">Hallo, ich bin Diana von Pferdesicht</p>
          </div>

          {/* Überschrift */}
          <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-6">
            Warum ich das hier für dich sammle
          </h2>

          {/* Text - linksbündig aber zentrierter Container */}
          <div className="space-y-4 text-loam-600 leading-relaxed text-left">
            <p>
              Ich habe jahrelang nach Antworten gesucht – in Büchern, auf Seminaren, in Foren. Und dabei festgestellt: Die besten Informationen sind verstreut, widersprechen sich, oder verstecken sich hinter Fachsprache.
            </p>
            <p>
              Hier teile ich mit dir das, was ich gerne früher gewusst hätte.
            </p>
            <p>
              Gefiltert durch <strong>30 Jahre als Pferdebesitzerin</strong> – mit schlaflosen Nächten, teuren Fehlern und der Erkenntnis, dass Pferde uns mehr zeigen, als wir oft sehen wollen.
            </p>
            <p>
              Und durch <strong>15 Jahre als Unternehmerin</strong>, gemeinsam mit meinem Mann Stefan, in der Pferdebranche – im Austausch mit Tierärzten, Therapeuten und Trainern. Genug, um zu erkennen, <strong>wer wirklich hilft</strong> – und wer nur so klingt.
            </p>
            <p>
              Geprüft an echten Pferden, übersetzt in Sprache, die du verstehst.
            </p>
            <p className="font-medium text-loam-900">
              Kein Meinungs-Dschungel. Kein Fachchinesisch. Nur das, was einen Unterschied macht.
            </p>
            <Link
              href="/ueber-mich"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-sage-600 text-white rounded-full hover:bg-sage-700 transition-colors font-medium"
            >
              Mein Weg – und warum er für dich relevant ist
              <span>→</span>
            </Link>
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
            <>
              {/* Featured Article (First/Newest) */}
              <Link
                href={`/blog/${filteredPosts[0].slug}`}
                className="group block bg-paper rounded-2xl border border-loam-100 shadow-soft overflow-hidden hover:shadow-soft-lg transition-shadow mb-8"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="aspect-[16/10] md:aspect-auto md:min-h-[320px] relative overflow-hidden bg-sage-50">
                    {filteredPosts[0].frontmatter.image ? (
                      <Image
                        src={filteredPosts[0].frontmatter.image}
                        alt={
                          filteredPosts[0].frontmatter.imageAlt ||
                          filteredPosts[0].frontmatter.title
                        }
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
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1.5 bg-white border border-gold text-loam-700 text-xs font-medium tracking-wide rounded-full">
                        {filteredPosts[0].frontmatter.readingTime || "5 Min."} ·{" "}
                        {filteredPosts[0].frontmatter.category}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-loam-900 mb-4 group-hover:text-sage-700 transition-colors">
                      {filteredPosts[0].frontmatter.title}
                    </h3>
                    <p className="text-loam-600 leading-relaxed mb-6">
                      {filteredPosts[0].frontmatter.description}
                    </p>
                    <span className="text-sage-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Weiterlesen
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

              {/* Remaining Articles Grid */}
              {filteredPosts.length > 1 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.slice(1).map((post) => (
                    <ArticleCard key={post.slug} post={post} />
                  ))}
                </div>
              )}
            </>
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
                Da ist noch nichts – aber das ändert sich bald.
              </h3>
              <p className="text-loam-600 mb-6">
                Ich schreibe gerade an neuen Artikeln zu diesem Thema. Schau
                bald wieder vorbei!
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

      {/* Quiz CTA */}
      <section className="py-16 lg:py-24 bg-[#5f6b54]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LINKS */}
            <div>
              <p className="text-[#c8a476] text-sm font-semibold uppercase tracking-wider mb-4">
                Dein persönlicher Frühlings-Fahrplan
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-white leading-tight mb-6">
                Du fragst dich, wie du dich am besten auf den Frühling vorbereiten kannst?
              </h2>
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#c8a476] text-white rounded-full hover:bg-[#b8946a] transition-colors font-semibold text-lg"
              >
                Zeig mir, worauf ich achten sollte
                <span>→</span>
              </Link>
              <p className="text-white/60 text-sm mt-4">
                Kostenlos · 2 Minuten · Report per E-Mail
              </p>
            </div>

            {/* RECHTS */}
            <div className="bg-white/10 rounded-2xl p-8">
              <p className="text-white font-semibold uppercase tracking-wider text-sm mb-4">
                Was du bekommst:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-white">
                  <span className="text-[#c8a476]">✓</span>
                  <span><strong className="font-semibold">8 kurze Fragen</strong> zu Fellwechsel, Anweiden, Hufrehe-Prävention</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <span className="text-[#c8a476]">✓</span>
                  <span>Dein <strong className="font-semibold">individueller Report</strong></span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <span className="text-[#c8a476]">✓</span>
                  <span>Abgestimmt auf <strong className="font-semibold">eure Situation</strong></span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#5f6b54] p-4 md:hidden z-50">
        <Link
          href="/quiz"
          className="block text-center"
        >
          <span className="block text-[#c8a476] text-xs mb-1">Meine Frühlingsvorbereitung</span>
          <span className="block text-white font-semibold">Zeig mir, worauf ich achten sollte →</span>
        </Link>
        <p className="text-white/60 text-xs text-center mt-2">
          Kostenlos · 2 Minuten · Report per E-Mail
        </p>
      </div>
    </>
  );
}
