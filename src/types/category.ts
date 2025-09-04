import { ComponentType } from "react";

export interface Category {
  hero: {
    title: string;
    description: string;
    imageOne: string;
    imageTwo: string;
  };
  approach: {
    imageMob: ComponentType;
    imageDesk: ComponentType;
    imageTwo: string;
    list: { title: string; description: string }[];
  };
}
