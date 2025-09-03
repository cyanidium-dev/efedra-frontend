import "./globals.css";
import { getDefaultMetadata } from "@/utils/getDefaultMetadata";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
});

const evolenta = localFont({
  src: "../fonts/evolenta-regular.ttf",
  variable: "--font-evolenta",
});

export async function generateMetadata() {
  return getDefaultMetadata();
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${evolenta.variable} flex min-h-dvh flex-col antialiased text-[14px] font-normal leading-[120%]`}
      >
        <Header />
        <main className="flex-1 pt-[86px] lg:pt-[99px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
