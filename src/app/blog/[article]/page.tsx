import Hero from "@/components/articlePage/hero/Hero";
import { Suspense } from "react";
import { fetchSanityDataServer } from "@/utils/fetchSanityDataServer";
import { postBySlugQuery } from "@/lib/queries";
import Loader from "@/components/shared/loader/Loader";
import MarqueeLine from "@/components/shared/marquee/MarqueeLine";
import Content from "@/components/articlePage/content/Content";

interface ArticlePageProps {
  params: Promise<{ article: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { article } = await params;
  const post = await fetchSanityDataServer(postBySlugQuery, { slug: article });

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Hero post={post} />
      </Suspense>
      <MarqueeLine />
      <Suspense fallback={<Loader />}>
        <Content post={post} />
      </Suspense>
    </>
  );
}
