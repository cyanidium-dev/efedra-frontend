export interface Service {
  title: string;
  slug: string;
  category: string;
  order: number;
  categoryImage: string;
  mainImage: string;
  shortDescription: string;
  procedureDescription: {
    text: string;
    images: string[];
    info: string[];
  };
  recommended: {
    image: string;
    text: string;
  }[];
  howItGoes: {
    image: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  advantages: {
    icon: string;
    title: string;
    text: string;
  }[];
  contraindications: {
    image: string;
    items: string[];
  };
  types: {
    title: string;
    list: {
      image: string;
      title: string;
      text: string;
      details?: string[];
    }[];
  };
  pricing: {
    link: string;
  };
}
