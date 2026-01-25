import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getPostBySlug,
  getPostSlugs,
  getRelatedPosts,
  calculateReadingTime,
} from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Artikel nicht gefunden",
    };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
      images: post.frontmatter.image ? [post.frontmatter.image] : undefined,
    },
  };
}

// MDX Components for styling
const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="font-serif text-3xl sm:text-4xl text-loam-900 mt-12 mb-6" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mt-10 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-serif text-xl sm:text-2xl text-loam-900 mt-8 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-loam-600 leading-relaxed mb-6" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside space-y-2 text-loam-600 mb-6 ml-4" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside space-y-2 text-loam-600 mb-6 ml-4" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-sage-400 pl-6 py-2 my-8 italic text-loam-700 bg-sage-50 rounded-r-lg"
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-sage-600 hover:text-sage-700 underline" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-loam-900" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic" {...props} />
  ),
  hr: () => <hr className="border-loam-100 my-12" />,
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="rounded-xl my-8 w-full"
      alt={props.alt || ""}
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="bg-loam-900 text-paper p-6 rounded-xl overflow-x-auto my-8 text-sm"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-loam-100 px-2 py-1 rounded text-sm text-loam-800" {...props} />
  ),
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;
  const readingTime = frontmatter.readingTime || calculateReadingTime(content);
  const relatedPosts = getRelatedPosts(
    slug,
    frontmatter.category,
    frontmatter.tags || []
  );

  // Format date
  const formattedDate = new Date(frontmatter.date).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      {/* Hero Section with Image */}
      <section className="relative bg-loam-900">
        {/* Background Image */}
        {frontmatter.image && (
          <div className="absolute inset-0">
            <Image
              src={frontmatter.image}
              alt={frontmatter.imageAlt || frontmatter.title}
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-loam-900 via-loam-900/80 to-loam-900/40" />
          </div>
        )}

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          {/* Category Badge */}
          <Link
            href={`/wissen?category=${encodeURIComponent(frontmatter.category)}`}
            className="inline-block bg-sage-600 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 hover:bg-sage-700 transition-colors"
          >
            {frontmatter.category}
          </Link>

          {/* Title */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            {frontmatter.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-white/80">
            {/* Author */}
            {frontmatter.author && (
              <>
                <div className="flex items-center gap-3">
                  {frontmatter.authorImage ? (
                    <Image
                      src={frontmatter.authorImage}
                      alt={frontmatter.author}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-sage-600 flex items-center justify-center text-white font-medium">
                      {frontmatter.author.charAt(0)}
                    </div>
                  )}
                  <span className="font-medium">{frontmatter.author}</span>
                </div>
                <span className="text-white/40">|</span>
              </>
            )}

            {/* Date */}
            <span>{formattedDate}</span>

            <span className="text-white/40">|</span>

            {/* Reading Time */}
            <span>{readingTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Lead/Description */}
          {frontmatter.description && (
            <p className="text-xl text-loam-700 leading-relaxed mb-12 font-medium">
              {frontmatter.description}
            </p>
          )}

          {/* MDX Content */}
          <div className="prose-pferdesicht">
            <MDXRemote source={content} components={mdxComponents} />
          </div>

          {/* Tags */}
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-loam-100">
              <div className="flex flex-wrap gap-2">
                {frontmatter.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/wissen?tag=${encodeURIComponent(tag)}`}
                    className="bg-loam-100 text-loam-700 px-3 py-1.5 rounded-full text-sm hover:bg-loam-200 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Author Box */}
      {frontmatter.author && (
        <section className="py-16 bg-bg-light">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-paper p-8 rounded-2xl border border-loam-100">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Author Image */}
                <div className="flex-shrink-0">
                  {frontmatter.authorImage ? (
                    <Image
                      src={frontmatter.authorImage}
                      alt={frontmatter.author}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-sage-600 flex items-center justify-center text-white text-2xl font-medium">
                      {frontmatter.author.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Author Info */}
                <div>
                  <p className="text-sm text-sage-600 font-medium mb-1">
                    Geschrieben von
                  </p>
                  <h3 className="font-serif text-xl text-loam-900 mb-2">
                    {frontmatter.author}
                  </h3>
                  <p className="text-loam-600 leading-relaxed mb-4">
                    30+ Jahre Pferdeerfahrung, Reittherapeutin und Expertin
                    für natürliche Pferdehaltung. Diana teilt ihr Wissen,
                    damit du fundierte Entscheidungen für dein Pferd treffen kannst.
                  </p>
                  <Link
                    href="/ueber-diana"
                    className="text-sage-600 hover:text-sage-700 font-medium inline-flex items-center gap-2"
                  >
                    Mehr erfahren
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-8">
              Das könnte dich auch interessieren
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="bg-paper rounded-2xl overflow-hidden border border-loam-100 hover:shadow-lg transition-shadow">
                    {/* Image */}
                    {post.frontmatter.image && (
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={post.frontmatter.image}
                          alt={post.frontmatter.imageAlt || post.frontmatter.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      <span className="text-sage-600 text-sm font-medium">
                        {post.frontmatter.category}
                      </span>
                      <h3 className="font-serif text-lg text-loam-900 mt-2 group-hover:text-sage-700 transition-colors line-clamp-2">
                        {post.frontmatter.title}
                      </h3>
                      <p className="text-loam-600 text-sm mt-2 line-clamp-2">
                        {post.frontmatter.description}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-loam-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-white mb-4">
            Bereit für mehr Wissen?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Entdecke unsere umfassenden Guides mit wissenschaftlich fundiertem
            Wissen für verantwortungsvolle Pferdebesitzer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/guides/fruehling"
              className="bg-sage-600 text-white px-8 py-3 rounded-full hover:bg-sage-700 transition-colors font-medium"
            >
              Frühlings-Guide entdecken
            </Link>
            <Link
              href="/wissen"
              className="bg-white/10 text-white px-8 py-3 rounded-full hover:bg-white/20 transition-colors font-medium"
            >
              Alle Artikel lesen
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-8 bg-bg-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="text-sage-600 hover:text-sage-700 inline-flex items-center gap-2"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Zurück zur Übersicht
          </Link>
        </div>
      </section>
    </>
  );
}
