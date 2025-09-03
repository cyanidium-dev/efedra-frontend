import Hero from "@/components/categoryPage/hero/Hero";
import { categoriesData } from "./data";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const { dentistry, esteticMedicine } = categoriesData;

  const variant = category === "dentistry" ? "blue" : "beige";

  const currentCategory =
    category === "dentistry" ? dentistry : esteticMedicine;

  return (
    <>
      <Hero variant={variant} category={currentCategory} />
    </>
  );
}
