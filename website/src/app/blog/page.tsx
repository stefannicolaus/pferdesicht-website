"use client"
import { Search, X, Menu, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("alle")

  const trainingPosts = [
    {
      id: "koerpersprache-der-dialog-beginnt",
      title: "Körpersprache: Der Dialog beginnt, bevor du sprichst",
      excerpt:
        'Lerne die Signale zu erkennen, bevor dein Pferd „laut" werden muss. Die nonverbale Kommunikation, die alles verändert.',
      image: "/images/thumbnails/thumbnail-training.png",
      readTime: "8 Min",
      slug: "/blog/koerpersprache-der-dialog-beginnt",
      category: "training",
    },
    {
      id: "bodenarbeit-basics",
      title: "Bodenarbeit: Mehr als nur Vorbereitung",
      excerpt: 'Wie die Arbeit am Boden die Beziehung vertieft und warum sie kein „Nice-to-have" ist.',
      image: "/images/thumbnails/thumbnail-training.png",
      readTime: "10 Min",
      slug: "/blog/bodenarbeit-basics",
      category: "training",
    },
    {
      id: "timing-in-training",
      title: "Das perfekte Timing: Wann Belohnung wirkt",
      excerpt: "Warum eine Sekunde den Unterschied macht und wie du dein Timing verbesserst.",
      image: "/images/thumbnails/thumbnail-training.png",
      readTime: "7 Min",
      slug: "/blog/timing-in-training",
      category: "training",
    },
  ]

  const gesundheitPosts = [
    {
      id: "pferd-eindecken-winter",
      title: "0 Grad am Stall: Pferd eindecken – ja oder nein?",
      excerpt:
        "Wann eine Decke wirklich Sinn macht und warum Heu die beste Heizung ist. Faktenbasiert aus 20 Jahren Erfahrung.",
      image: "/images/thumbnails/thumbnail-winter-v3.png",
      readTime: "8 Min",
      slug: "/blog/pferd-eindecken-winter",
      category: "gesundheit",
    },
    {
      id: "hufpflege-basics",
      title: "Hufpflege: Was du täglich sehen solltest",
      excerpt: "Die wichtigsten Signale für gesunde Hufe und wann du den Hufschmied rufen solltest.",
      image: "/images/thumbnails/thumbnail-gesundheit-v2.png",
      readTime: "9 Min",
      slug: "/blog/hufpflege-basics",
      category: "gesundheit",
    },
    {
      id: "stress-erkennen",
      title: "Ist mein Pferd gestresst? Checkliste",
      excerpt: "Die leisen Signale, die du nicht übersehen darfst – bevor Stress krank macht.",
      image: "/images/thumbnails/thumbnail-gesundheit-v2.png",
      readTime: "12 Min",
      slug: "/blog/stress-erkennen",
      category: "gesundheit",
    },
  ]

  const menschPosts = [
    {
      id: "mindset-reiter",
      title: "Angst im Sattel: Vom Tabu zur Stärke",
      excerpt: "Warum Angst ein wichtiger Ratgeber ist und wie du lernst, mit ihr zu reiten statt gegen sie.",
      image: "/images/thumbnails/thumbnail-mindset.png",
      readTime: "12 Min",
      slug: "/blog/mindset-reiter",
      category: "mindset",
    },
    {
      id: "erwartungen-loslassen",
      title: "Wenn Erwartungen die Beziehung zerstören",
      excerpt: "Warum weniger Druck oft mehr Fortschritt bedeutet und wie du lernst, loszulassen.",
      image: "/images/thumbnails/thumbnail-mindset.png",
      readTime: "10 Min",
      slug: "/blog/erwartungen-loslassen",
      category: "mindset",
    },
    {
      id: "vertrauen-aufbauen",
      title: "Vertrauen entsteht in der Wiederholung",
      excerpt: "Wie kleine, konsequente Handlungen die Basis für eine tiefe Partnerschaft schaffen.",
      image: "/images/thumbnails/thumbnail-mindset.png",
      readTime: "8 Min",
      slug: "/blog/vertrauen-aufbauen",
      category: "mindset",
    },
  ]

  const allPosts = [...trainingPosts, ...gesundheitPosts, ...menschPosts]

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = activeCategory === "alle" || post.category === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="relative overflow-x-hidden min-h-screen bg-bg-light">
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.05] bg-paper-grain" />

      {/* Header */}

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-loam mb-6">
              Entdecke unsere <span className="italic">Themenwelten</span>
            </h1>
            <p className="text-lg md:text-xl text-loam/70 font-sans mb-12 leading-relaxed">
              Für Pferdemenschen, die hinschauen. Praxiswissen zu Training, Gesundheit & Haltung, Mindset & Beziehung.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {/* Search Bar with Button */}
            <div className="relative flex items-center gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-loam/40" />
                <input
                  type="text"
                  placeholder="Suche nach Themen, Tipps oder Perspektiven..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 border border-loam/20 rounded-full font-sans text-loam placeholder-loam/40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all bg-white"
                />
              </div>
              <button className="px-8 py-4 bg-loam text-white font-sans font-bold text-sm tracking-wider uppercase rounded-full hover:bg-loam/90 transition-colors whitespace-nowrap">
                Suchen
              </button>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { id: "alle", label: "ALLE" },
                { id: "training", label: "TRAINING" },
                { id: "gesundheit", label: "GESUNDHEIT" },
                { id: "mindset", label: "MINDSET" },
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2.5 font-sans font-bold text-xs tracking-widest uppercase rounded-full transition-all ${
                    activeCategory === category.id
                      ? "bg-loam text-white"
                      : "bg-transparent border border-loam/30 text-loam/60 hover:border-loam/50 hover:text-loam"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28 bg-white relative border-y border-loam/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Diana Portrait Circle */}
            <div className="flex-shrink-0">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gold/30 shadow-xl">
                <img
                  src="/images/Diana_Pferdesicht.jpeg"
                  alt="Diana - Gründerin von Pferdesicht"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Mission Text */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-serif text-loam mb-6 leading-tight">Wissen als Rüstung</h2>
              <p className="text-lg text-loam/80 font-sans font-light leading-relaxed mb-6">
                Ich filtere für dich die Wahrheit im Meinungs-Dschungel. Nicht, weil du es nicht selbst könntest –
                sondern damit du schneller ans Ziel kommst.
              </p>
              <p className="text-lg text-loam/80 font-sans font-light leading-relaxed mb-6">
                Mein Wissen ist über 30 Jahre gewachsen: aus tausenden Expertengesprächen, aktueller Veterinärmedizin
                und dem, was ich auf die harte Tour lernen musste.
              </p>
              <p className="text-lg text-loam/80 font-sans font-light leading-relaxed">
                Denn du bist nicht „zu pingelig". Du schaust hin. Und genau das macht den Unterschied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Banner - Full Version like Homepage */}
      <section className="py-20 md:py-24 bg-sage relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <div className="text-center lg:text-left">
              <span className="text-gold font-sans text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                DEIN PERSÖNLICHER FRÜHLINGS-FAHRPLAN
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6 leading-[1.1] text-balance">
                Fellwechsel, Anweiden, Parasiten – was ist jetzt wichtig für <span className="italic">DEIN</span> Pferd?
              </h2>
              <div className="flex flex-col items-center lg:items-start gap-4">
                <Link
                  href="/quiz"
                  className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-[#b8956a] text-white font-sans font-bold text-sm tracking-wide uppercase rounded-sm tactile-button inline-flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  Quiz starten
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <p className="text-white/60 text-xs font-sans">
                  Kostenlos · 2 Minuten · Report per E-Mail
                </p>
              </div>
            </div>
            {/* Right Column - Benefits Box */}
            <div className="bg-[#6a7a5f] rounded-sm p-8 border border-white/10">
              <h3 className="text-white font-sans font-bold text-sm tracking-widest uppercase mb-6">Was du bekommst:</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90 font-sans text-sm">8 kurze Fragen zu deinem Pferd</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90 font-sans text-sm">Persönliche Risiko-Ampel: Grün, Gelb oder Rot</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90 font-sans text-sm">Wochen-Kalender Februar bis Mai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts by Category */}
      <section className="py-20 md:py-28 bg-bg-light relative">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Show filtered results when searching or filtering */}
          {(searchQuery !== "" || activeCategory !== "alle") ? (
            <>
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-4xl font-serif text-loam">
                  {activeCategory === "alle"
                    ? "Suchergebnisse"
                    : activeCategory === "training"
                      ? "Training"
                      : activeCategory === "gesundheit"
                        ? "Gesundheit"
                        : "Mindset"}
                </h2>
                {filteredPosts.length > 0 && (
                  <span className="text-sm font-sans text-loam/60">{filteredPosts.length} Artikel</span>
                )}
              </div>

              {filteredPosts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-lg text-loam/60 font-sans">
                    Keine Artikel gefunden. Versuche einen anderen Suchbegriff oder wähle eine andere Kategorie.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <article
                      key={post.id}
                      className="group bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-loam/10"
                    >
                      <Link href={post.slug}>
                        <div className="relative h-56 overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-loam/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-xs font-sans text-sage mb-3">
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>{post.readTime}</span>
                          </div>
                          <h3 className="text-xl font-serif text-loam mb-3 leading-snug group-hover:text-gold transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-sm font-sans text-loam/70 leading-relaxed line-clamp-2">{post.excerpt}</p>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              )}
            </>
          ) : (
            /* Show categorized sections when not filtering */
            <div className="space-y-20">
              
              {/* Training Section */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-serif text-loam mb-2">Training</h2>
                  <p className="text-loam/60 font-sans text-base">Kommunikation, Körpersprache und der Weg zur echten Partnerschaft.</p>
                  <div className="w-full h-px bg-sage/40 mt-6" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {trainingPosts.map((post) => (
                    <article
                      key={post.id}
                      className="group bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-loam/10"
                    >
                      <Link href={post.slug}>
                        <div className="relative h-56 overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-loam/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-xs font-sans text-sage mb-3">
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>{post.readTime}</span>
                          </div>
                          <h3 className="text-xl font-serif text-loam mb-3 leading-snug group-hover:text-gold transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-sm font-sans text-loam/70 leading-relaxed line-clamp-2">{post.excerpt}</p>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>

              {/* Gesundheit Section */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-serif text-loam mb-2">Gesundheit & Haltung</h2>
                  <p className="text-loam/60 font-sans text-base">Faktenbasierte Entscheidungen für das Wohlbefinden deines Pferdes.</p>
                  <div className="w-full h-px bg-sage/40 mt-6" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {gesundheitPosts.map((post) => (
                    <article
                      key={post.id}
                      className="group bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-loam/10"
                    >
                      <Link href={post.slug}>
                        <div className="relative h-56 overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-loam/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-xs font-sans text-sage mb-3">
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>{post.readTime}</span>
                          </div>
                          <h3 className="text-xl font-serif text-loam mb-3 leading-snug group-hover:text-gold transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-sm font-sans text-loam/70 leading-relaxed line-clamp-2">{post.excerpt}</p>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>

              {/* Mindset Section */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-serif text-loam mb-2">Mindset & Beziehung</h2>
                  <p className="text-loam/60 font-sans text-base">Wenn du dich veränderst, verändert sich alles.</p>
                  <div className="w-full h-px bg-sage/40 mt-6" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {menschPosts.map((post) => (
                    <article
                      key={post.id}
                      className="group bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-loam/10"
                    >
                      <Link href={post.slug}>
                        <div className="relative h-56 overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-loam/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-xs font-sans text-sage mb-3">
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>{post.readTime}</span>
                          </div>
                          <h3 className="text-xl font-serif text-loam mb-3 leading-snug group-hover:text-gold transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-sm font-sans text-loam/70 leading-relaxed line-clamp-2">{post.excerpt}</p>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>
      </section>

      {/* Footer */}
    </div>
  )
}
