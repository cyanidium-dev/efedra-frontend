import Hero from "@/components/articlePage/hero/Hero";
import { Suspense } from "react";
import { fetchSanityDataServer } from "@/utils/fetchSanityDataServer";
import { allPostsQuery, postBySlugQuery } from "@/lib/queries";
import Loader from "@/components/shared/loader/Loader";
import MarqueeLine from "@/components/shared/marquee/MarqueeLine";
import Content from "@/components/articlePage/content/Content";
import RecommendedPosts from "@/components/articlePage/hero/recommendedPosts/RecommendedPosts";
import { Post } from "@/types/post";

interface ArticlePageProps {
  params: Promise<{ article: string }>;
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
      </Suspense>
      <MarqueeLine />
      <Suspense fallback={<Loader />}>
        <Content post={post} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <RecommendedPosts posts={recommendedPosts} />
      </Suspense>
    </>
  );
}
