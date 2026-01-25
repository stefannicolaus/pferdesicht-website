import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface PostFrontmatter {
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

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}

export interface PostMeta {
  slug: string;
  frontmatter: PostFrontmatter;
}

/**
 * Get all blog post slugs
 */
export function getPostSlugs(): string[] {
  try {
    const files = fs.readdirSync(postsDirectory);
    return files
      .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
      .map((file) => file.replace(/\.mdx?$/, ""));
  } catch {
    return [];
  }
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): Post | null {
  try {
    // Try .mdx first, then .md
    let fullPath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(postsDirectory, `${slug}.md`);
    }

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Provide defaults for missing frontmatter fields
    const frontmatter: PostFrontmatter = {
      title: data.title || extractTitleFromContent(content) || slug,
      description: data.description || "",
      date: data.date || new Date().toISOString().split("T")[0],
      author: data.author || "Diana",
      authorImage: data.authorImage,
      image: data.image || "/images/hero-pferd-winter-schnee-v4.png",
      imageAlt: data.imageAlt,
      category: data.category || "Allgemein",
      tags: data.tags,
      readingTime: data.readingTime,
      featured: data.featured,
    };

    return {
      slug,
      frontmatter,
      content,
    };
  } catch {
    return null;
  }
}

/**
 * Extract title from markdown content (first h1)
 */
function extractTitleFromContent(content: string): string | null {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1] : null;
}

/**
 * Get all posts with frontmatter (without content for listing pages)
 */
export function getAllPosts(): PostMeta[] {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug);
      if (!post) return null;
      return {
        slug: post.slug,
        frontmatter: post.frontmatter,
      };
    })
    .filter((post): post is PostMeta => post !== null);

  // Sort posts by date (newest first)
  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return dateB.getTime() - dateA.getTime();
  });
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): PostMeta[] {
  if (!category) return [];
  return getAllPosts().filter(
    (post) =>
      post.frontmatter.category &&
      post.frontmatter.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag: string): PostMeta[] {
  return getAllPosts().filter((post) =>
    post.frontmatter.tags?.some(
      (t) => t.toLowerCase() === tag.toLowerCase()
    )
  );
}

/**
 * Get featured posts
 */
export function getFeaturedPosts(): PostMeta[] {
  return getAllPosts().filter((post) => post.frontmatter.featured);
}

/**
 * Get related posts based on category and tags
 */
export function getRelatedPosts(
  currentSlug: string,
  category: string = "",
  tags: string[] = [],
  limit: number = 3
): PostMeta[] {
  const allPosts = getAllPosts().filter((post) => post.slug !== currentSlug);

  // Score posts based on relevance
  const scoredPosts = allPosts.map((post) => {
    let score = 0;

    // Same category = +2
    const postCategory = post.frontmatter.category || "";
    if (category && postCategory.toLowerCase() === category.toLowerCase()) {
      score += 2;
    }

    // Matching tags = +1 each
    const postTags = post.frontmatter.tags || [];
    const safeTags = tags || [];
    safeTags.forEach((tag) => {
      if (tag && postTags.some((t) => t && t.toLowerCase() === tag.toLowerCase())) {
        score += 1;
      }
    });

    return { post, score };
  });

  // Sort by score and return top results
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((post) => post.frontmatter.category));
  return Array.from(categories).sort();
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.frontmatter.tags?.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

/**
 * Calculate reading time from content
 */
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} Min. Lesezeit`;
}
