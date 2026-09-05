import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/BlogArticle";
import { postBodies } from "@/content/blog";
import { blogPosts, getPost } from "@/lib/resources";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return { title: "Not found" };
  }

  const description = post.description ?? post.excerpt;

  return {
    title: post.title,
    description,
    alternates: { canonical: `/resources/${slug}` },
    openGraph: {
      title: post.title,
      description,
      url: `/resources/${slug}`,
      type: "article",
      images: [{ url: post.cover, alt: post.coverAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [post.cover],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  const Body = postBodies[slug];

  if (!post || !Body) {
    notFound();
  }

  return <BlogArticle post={post} Body={Body} />;
}
