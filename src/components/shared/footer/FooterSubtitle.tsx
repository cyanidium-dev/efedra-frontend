import { ReactNode } from "react";

interface FooterSubtitleProps {
  children: ReactNode;
  className?: string;
}

export default function FooterSubtitle({
  children,
  className = "",
}: FooterSubtitleProps) {
  return (
    <h3 className={`mb-4 font-evolenta uppercase ${className}`}>{children}</h3>
  );
}
