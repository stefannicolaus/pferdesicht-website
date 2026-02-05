import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/blog";

// Next.js 16: API-Route als dynamisch markieren
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const posts = getAllPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json([], { status: 500 });
  }
}
