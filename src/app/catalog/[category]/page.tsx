import Hero from "@/components/catalogCategoryPage/hero/Hero";
import { categoriesData } from "./data";
import ServicesList from "@/components/catalogCategoryPage/servicesLIst/ServicesList";

interface CatalogCategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CatalogCategoryPage({
  params,
}: CatalogCategoryPageProps) {
  const { category } = await params;

  const { dentistry, aesthetic } = categoriesData;

  const currentCategory = category === "dentistry" ? dentistry : aesthetic;

  const variant = category === "dentistry" ? "blue" : "beige";

  return (
    <>
      <Hero variant={variant} category={currentCategory} />
      <ServicesList />
    </>
  );
}
