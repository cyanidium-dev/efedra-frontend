import Hero from "@/components/categoryPage/hero/Hero";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  const variant = category === "dentistry" ? "blue" : "beige";

  return (
    <>
      <Hero variant={variant} />
    </>
  );
}
