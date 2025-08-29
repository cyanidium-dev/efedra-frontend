import { ReactNode } from "react";

interface FooterSubtitleProps {
  children: ReactNode;
}

export default function FooterSubtitle({ children }: FooterSubtitleProps) {
  return <h3 className="mb-4 font-evolenta uppercase">{children}</h3>;
}
