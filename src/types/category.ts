export interface Category {
  hero: {
    title: string;
    description: string;
    imageOne: string;
    imageTwo: string;
  };
  approach: {
    imageMob: string;
    imageDesk: string;
    imageTwo: string;
    list: { title: string; description: string }[];
  };
}
