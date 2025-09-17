import type { Metadata } from "next";
import Hero from "@/components/articlePage/hero/Hero";
import { Suspense } from "react";
import { fetchSanityDataServer } from "@/utils/fetchSanityDataServer";
import { allPostsQuery, postBySlugQuery } from "@/lib/queries";
import Loader from "@/components/shared/loader/Loader";
import MarqueeLine from "@/components/shared/marquee/MarqueeLine";
import Content from "@/components/articlePage/content/Content";
import RecommendedPosts from "@/components/articlePage/hero/recommendedPosts/RecommendedPosts";
import { Post } from "@/types/post";
import { getDefaultMetadata } from "@/utils/getDefaultMetadata";
import { urlFor } from "@/utils/getUrlForSanityImage";

interface ArticlePageProps {
  params: Promise<{ article: string }>;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { article } = await params;

  const currentPost = await fetchSanityDataServer(postBySlugQuery, {
    slug: article,
  });

  return {
    title: `${currentPost?.title}` || getDefaultMetadata().title,
    description: currentPost?.description || getDefaultMetadata().description,
    openGraph: {
      images: [
        {
          url:
            urlFor(currentPost?.image).fit("crop").url() ||
            "/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: "Efedra Clinic",
        },
      ],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { article } = await params;
  const post = await fetchSanityDataServer(postBySlugQuery, { slug: article });
  const allPosts = await fetchSanityDataServer(allPostsQuery);
  const recommendedPosts = allPosts
    ?.filter((post: Post) => post?.slug !== article)
    .slice(0, 12);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Hero post={post} />
        <MarqueeLine />
        <Content post={post} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <RecommendedPosts posts={recommendedPosts} />
      </Suspense>
    </>
  );
}
