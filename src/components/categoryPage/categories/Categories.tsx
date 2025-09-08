import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { Category } from "@/types/category";

interface CategoriesProps {
  category: Category;
  variant: "blue" | "beige";
}

export default function Categories({ category, variant }: CategoriesProps) {
  return (
    <section className="pt-15">
      <Container>
        <SectionTitle variant={variant}>Категорії послуг</SectionTitle>
      </Container>
    </section>
  );
}
