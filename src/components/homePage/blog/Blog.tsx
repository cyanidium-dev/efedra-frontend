import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { allPostsQuery } from "@/lib/queries";
import { fetchSanityDataServer } from "@/utils/fetchSanityDataServer";
import BlogList from "./BlogList";
import { Suspense } from "react";
import Loader from "@/components/shared/loader/Loader";

export default async function Blog() {
  const posts = await fetchSanityDataServer(allPostsQuery);

  console.log(posts);

  return (
    <section className="pt-15 lg:py-[95px] lg:mb-6">
      <Container>
        <div className="flex flex-col md:flex-row-reverse sm:justify-between gap-6 mb-10 lg:mb-4.5">
          <SectionTitle animationDirection="left" className="shrink-0">
            Блог і корисні матеріали
          </SectionTitle>
          <p className="max-w-[520px] font-evolenta text-[24px] lg:text-[32px] font-normal leading-[120%] uppercase text-blue">
            довіряй лише перевіреній інформації
          </p>
        </div>
        <Loader />
        <Suspense fallback={<Loader />}>
          <BlogList />
        </Suspense>
      </Container>
    </section>
  );
}
