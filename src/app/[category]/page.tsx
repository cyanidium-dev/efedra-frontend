import Hero from "@/components/categoryPage/hero/Hero";
import { categoriesData } from "./data";
import MarqueeLine from "@/components/shared/marquee/MarqueeLine";
import Approach from "@/components/categoryPage/approach/Approach";
import Categories from "@/components/categoryPage/categories/Categories";
import Team from "@/components/categoryPage/team/Team";
import { fetchSanityDataServer } from "@/utils/fetchSanityDataServer";
import { allDoctorsQuery } from "@/lib/queries";
import { Doctor } from "@/types/doctor";
import { Suspense } from "react";
import Loader from "@/components/shared/loader/Loader";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const { dentistry, aesthetic } = categoriesData;

  const doctorsList = await fetchSanityDataServer(allDoctorsQuery);

  const filteredDoctorsList = doctorsList.filter(
    (doctor: Doctor) => doctor?.direction === category
  );

  const variant = category === "dentistry" ? "blue" : "beige";

  const currentCategory = category === "dentistry" ? dentistry : aesthetic;

  return (
    <>
      <Hero variant={variant} category={currentCategory} />
      <MarqueeLine variant={variant} />
      <Approach variant={variant} category={currentCategory} />
      <Categories variant={variant} category={currentCategory} />
      <Suspense fallback={<Loader />}>
        <Team variant={variant} doctorsList={filteredDoctorsList} />
      </Suspense>
    </>
  );
}
