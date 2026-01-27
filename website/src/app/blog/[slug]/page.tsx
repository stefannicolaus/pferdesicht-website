import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { KeyTakeaway, ScientificFact, ExpertQuote, QuizCTA } from "@/components/blog";

const components = {
  KeyTakeaway,
  ScientificFact,
  ExpertQuote,
  QuizCTA,
};

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artikel nicht gefunden" };
  return {
    title: `${post.frontmatter.title} | Pferdesicht`,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      {post.frontmatter.image && (
        <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
          <img
            src={post.frontmatter.image}
            alt={post.frontmatter.imageAlt || post.frontmatter.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="flex items-center gap-4 text-sm text-loam/60 mb-4">
        <span className="px-3 py-1 bg-sage/10 text-sage rounded-full">
          {post.frontmatter.category}
        </span>
        {post.frontmatter.readingTime && <span>{post.frontmatter.readingTime}</span>}
      </div>
      <h1 className="font-serif text-4xl md:text-5xl text-loam mb-6">{post.frontmatter.title}</h1>
      {post.frontmatter.description && (
        <p className="text-xl text-loam/70 mb-8 leading-relaxed">{post.frontmatter.description}</p>
      )}
      <div className="flex items-center gap-4 pb-8 mb-8 border-b border-loam/10">
        <div>
          <p className="font-medium text-loam">{post.frontmatter.author}</p>
          <p className="text-sm text-loam/60">
            {new Date(post.frontmatter.date).toLocaleDateString("de-DE", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
      <div className="blog-content">
        <MDXRemote source={post.content} components={components} />
      </div>
    </article>
  );
}
