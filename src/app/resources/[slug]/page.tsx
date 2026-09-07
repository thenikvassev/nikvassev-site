import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/BlogArticle";
import { GuideArticle } from "@/components/GuideArticle";
import { postBodies } from "@/content/blog";
import { guideBodies } from "@/content/guides";
import { getGuide, longGuides } from "@/lib/guides";
import { blogPosts, getPost } from "@/lib/resources";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [
    ...blogPosts.map((post) => ({ slug: post.slug })),
    ...longGuides.map((guide) => ({ slug: guide.slug })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (guide) {
    return {
      title: guide.title,
      description: guide.description,
      alternates: { canonical: guide.href },
      openGraph: {
        title: guide.title,
        description: guide.description,
        url: guide.href,
        type: "article",
        images: [{ url: guide.cover, alt: guide.coverAlt }],
      },
      twitter: {
        card: "summary_large_image",
        title: guide.title,
        description: guide.description,
        images: [guide.cover],
      },
    };
  }

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

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  const GuideBody = guideBodies[slug];

  if (guide && GuideBody) {
    return <GuideArticle guide={guide} Body={GuideBody} />;
  }

  const post = getPost(slug);
  const Body = postBodies[slug];

  if (!post || !Body) {
    notFound();
  }

  return <BlogArticle post={post} Body={Body} />;
}
