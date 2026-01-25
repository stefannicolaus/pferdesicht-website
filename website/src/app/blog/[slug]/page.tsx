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

// Helper to extract table of contents from content
function extractTOC(content: string): string[] {
  const headingRegex = /^##\s+(.+)$/gm;
  const headings: string[] = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    // Skip Key Takeaway headings and meta sections
    if (!match[1].includes("Key Takeaway") &&
        !match[1].includes("Zusammenfassung") &&
        !match[1].includes("Kostenloser Download")) {
      headings.push(match[1]);
    }
  }
  return headings.slice(0, 6); // Max 6 items
}

// MDX Components for styling
const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="font-serif text-3xl sm:text-4xl text-loam-900 mt-16 mb-6" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-serif text-2xl sm:text-3xl italic text-loam-900 mt-14 mb-6" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-serif text-xl sm:text-2xl text-loam-900 mt-10 mb-4" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-loam-700/80 leading-[1.8] mb-6 text-[17px]" {...props} />
  ),
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="space-y-3 text-loam-700/80 mb-8 ml-2" {...props}>
      {children}
    </ul>
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside space-y-3 text-loam-700/80 mb-8 ml-2" {...props} />
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-[1.8] flex items-start gap-3" {...props}>
      <span className="w-2 h-2 bg-gold-500 rounded-full mt-[10px] flex-shrink-0" />
      <span>{children}</span>
    </li>
  ),
  blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => {
    // Check if this is a Key Takeaway box
    const childText = String(children);
    if (childText.includes("Key Takeaway")) {
      return (
        <div className="bg-gold-500/5 border-l-4 border-gold-500 p-6 my-10 rounded-r-sm">
          <div className="prose-gold">
            {children}
          </div>
        </div>
      );
    }
    // Check if this is a science/research box
    if (childText.includes("Was ich recherchiert") ||
        childText.includes("Das sagt die Wissenschaft") ||
        childText.includes("Was die Fachpresse") ||
        childText.includes("Rechenbeispiel")) {
      return (
        <div className="bg-white border border-gold-400 rounded-sm p-8 my-10 relative">
          <div className="absolute -top-4 left-6 bg-white px-2">
            <svg className="w-8 h-8 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
            </svg>
          </div>
          <div className="prose-science mt-2">
            {children}
          </div>
        </div>
      );
    }
    // Regular blockquote with large quote marks
    return (
      <blockquote className="relative my-12 pl-8" {...props}>
        <span className="absolute left-0 top-0 text-6xl text-gold-400 font-serif leading-none select-none">"</span>
        <div className="font-serif text-2xl sm:text-3xl italic text-loam-800 leading-relaxed pl-4">
          {children}
        </div>
      </blockquote>
    );
  },
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-sage-600 hover:text-sage-700 underline underline-offset-2" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-loam-900" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic" {...props} />
  ),
  hr: () => <hr className="border-loam-200 my-12" />,
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <figure className="my-10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="rounded-sm w-full shadow-lg"
        alt={props.alt || ""}
        {...props}
      />
      {props.alt && (
        <figcaption className="text-center text-sm text-loam-500 mt-3 italic">
          {props.alt}
        </figcaption>
      )}
    </figure>
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-10">
      <table className="w-full border-collapse" {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="bg-sage-50 text-loam-900 font-semibold text-left p-4 border border-loam-200" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="p-4 border border-loam-200 text-loam-700" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="bg-loam-900 text-paper p-6 rounded-sm overflow-x-auto my-8 text-sm"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-loam-100 px-2 py-1 rounded text-sm text-loam-800" {...props} />
  ),
};

// Drop cap component for first paragraph
function DropCapParagraph({ text }: { text: string }) {
  if (!text || text.length < 2) return <p className="text-loam-700/80 leading-[1.8] mb-6">{text}</p>;

  const firstLetter = text.charAt(0);
  const rest = text.slice(1);

  return (
    <p className="text-loam-700/80 leading-[1.8] mb-6 text-[17px]">
      <span className="float-left text-7xl sm:text-8xl font-serif text-gold-500 leading-[0.8] mr-3 mt-1">
        {firstLetter}
      </span>
      {rest}
    </p>
  );
}

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
  const toc = extractTOC(content);

  // Extract first paragraph for drop cap
  const paragraphMatch = content.match(/^(?:---[\s\S]*?---\s*)?([^#\n>*-].+?)(?=\n\n|\n#|\n>|\n\*|\n-)/m);
  const firstParagraph = paragraphMatch ? paragraphMatch[1].trim() : "";

  // Remove first paragraph from content for separate rendering
  const contentWithoutFirst = firstParagraph
    ? content.replace(firstParagraph, "").replace(/^\n+/, "")
    : content;

  return (
    <>
      {/* Hero Section - Two Column */}
      <section className="bg-bg-light py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Text */}
            <div className="lg:pr-8">
              {/* Category Badge */}
              <Link
                href={`/wissen?category=${encodeURIComponent(frontmatter.category.toLowerCase())}`}
                className="inline-block bg-sage-600/20 text-sage-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6 hover:bg-sage-600/30 transition-colors"
              >
                {frontmatter.category}
              </Link>

              {/* Title */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-loam-900 mb-6 leading-[1.15]">
                {frontmatter.title}
              </h1>

              {/* Subtitle/Description */}
              {frontmatter.description && (
                <p className="text-lg text-loam-600 leading-relaxed mb-8">
                  {frontmatter.description}
                </p>
              )}

              {/* Meta Info */}
              <div className="flex items-center gap-2 text-loam-500 text-sm mb-10">
                <span>von {frontmatter.author || "Diana"}</span>
                <span>•</span>
                <span>{readingTime}</span>
              </div>

              {/* Table of Contents */}
              {toc.length > 0 && (
                <div className="bg-white border border-loam-200 rounded-sm p-6">
                  <h3 className="font-serif text-lg text-loam-900 mb-4">In diesem Artikel:</h3>
                  <ul className="space-y-2">
                    {toc.map((heading, index) => (
                      <li key={index} className="flex items-start gap-3 text-loam-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-[7px] flex-shrink-0" />
                        <span>{heading}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column - Image */}
            <div className="lg:pl-8">
              {frontmatter.image && (
                <div className="relative h-[400px] lg:h-[500px] rounded-sm overflow-hidden shadow-2xl">
                  <Image
                    src={frontmatter.image}
                    alt={frontmatter.imageAlt || frontmatter.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* First Paragraph with Drop Cap */}
          {firstParagraph && <DropCapParagraph text={firstParagraph} />}

          {/* Rest of MDX Content */}
          <div className="article-content">
            <MDXRemote source={contentWithoutFirst} components={mdxComponents} />
          </div>

          {/* Tags */}
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="mt-16 pt-8 border-t border-loam-200">
              <div className="flex flex-wrap gap-2">
                {frontmatter.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/wissen?tag=${encodeURIComponent(tag)}`}
                    className="bg-loam-100 text-loam-700 px-4 py-2 rounded-full text-sm hover:bg-loam-200 transition-colors"
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
            <div className="bg-white p-8 rounded-sm border border-loam-200">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Author Image */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-sage-600 flex items-center justify-center text-white text-2xl font-medium overflow-hidden">
                    <Image
                      src="/images/Diana_Pferdesicht.jpeg"
                      alt="Diana"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Author Info */}
                <div>
                  <p className="text-sm text-sage-600 font-medium mb-1">
                    Geschrieben von
                  </p>
                  <h3 className="font-serif text-xl text-loam-900 mb-3">
                    Diana
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
                    Mehr über Diana
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
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl sm:text-3xl text-loam-900 mb-10">
              Das könnte dich auch interessieren
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="bg-bg-light rounded-sm overflow-hidden border border-loam-100 hover:shadow-lg transition-shadow">
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
            Ich habe für dich recherchiert, sortiert und das Wichtigste
            zusammengefasst – damit du mehr Zeit im Stall verbringen kannst
            statt am Bildschirm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/guides/fruehling"
              className="bg-gold-500 text-loam-900 px-8 py-3 rounded-sm hover:bg-gold-400 transition-colors font-medium"
            >
              Frühlings-Guide entdecken
            </Link>
            <Link
              href="/wissen"
              className="bg-white/10 text-white px-8 py-3 rounded-sm hover:bg-white/20 transition-colors font-medium border border-white/20"
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
            href="/wissen"
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
