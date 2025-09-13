import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { Post } from "@/types/post";
import RecommendedPostsSlider from "./RecommendedPostsSlider";

interface RecommendedPostsProps {
  posts: Post[];
}

export default function RecommendedPosts({ posts }: RecommendedPostsProps) {
  if (!posts || !posts?.length) return null;

  return (
    <section className="pt-16 pb-14 lg:pt-30 lg:pb-25">
      <Container>
        <SectionTitle className="mb-6 lg:mb-7">Читайте також</SectionTitle>
        <RecommendedPostsSlider posts={posts} />
      </Container>
    </section>
  );
}
