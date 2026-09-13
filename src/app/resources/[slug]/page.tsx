import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/BlogArticle";
import { GuideArticle } from "@/components/GuideArticle";
import { postBodies } from "@/content/blog";
import { guideBodies } from "@/content/guides";
import { getGuide, longGuides } from "@/lib/guides";
import { ogImage, withOgImages } from "@/lib/og";
import { blogPosts, getPost, isPostPublished } from "@/lib/resources";

export const revalidate = 60;

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
    return withOgImages(
      {
        title: guide.title,
        description: guide.description,
        alternates: { canonical: guide.href },
        openGraph: {
          title: guide.title,
          description: guide.description,
          url: guide.href,
          type: "article",
        },
        twitter: {
          title: guide.title,
          description: guide.description,
        },
      },
      ogImage(guide.ogImage, guide.coverAlt),
    );
  }

  const post = getPost(slug);
  if (!post || !isPostPublished(post)) {
    return { title: "Not found" };
  }

  const description = post.description ?? post.excerpt;
  const title = post.metaTitle ?? post.title;

  return withOgImages(
    {
      title,
      description,
      alternates: { canonical: `/resources/${slug}` },
      openGraph: {
        title,
        description,
        url: `/resources/${slug}`,
        type: "article",
      },
      twitter: {
        title,
        description,
      },
    },
    ogImage(post.cover, post.coverAlt),
  );
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

  if (!post || !Body || !isPostPublished(post)) {
    notFound();
  }

  return <BlogArticle post={post} Body={Body} />;
}
