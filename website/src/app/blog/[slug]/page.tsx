import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";

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
  
  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      {/* Hero Image */}
      {post.frontmatter.image && (
        <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
          <img
            src={post.frontmatter.image}
            alt={post.frontmatter.imageAlt || post.frontmatter.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* Category & Reading Time */}
      <div className="flex items-center gap-4 text-sm text-loam/60 mb-4">
        <span className="px-3 py-1 bg-sage/10 text-sage rounded-full">
          {post.frontmatter.category}
        </span>
        {post.frontmatter.readingTime && (
          <span>{post.frontmatter.readingTime}</span>
        )}
      </div>
      
      {/* Title */}
      <h1 className="font-serif text-4xl md:text-5xl text-loam mb-6">
        {post.frontmatter.title}
      </h1>
      
      {/* Description */}
      {post.frontmatter.description && (
        <p className="text-xl text-loam/70 mb-8 leading-relaxed">
          {post.frontmatter.description}
        </p>
      )}
      
      {/* Author & Date */}
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
      
      {/* Content */}
      <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-loam prose-p:text-loam/80 prose-a:text-gold hover:prose-a:text-gold/80">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
