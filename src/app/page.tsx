import About from "@/components/homePage/about/About";
import Blog from "@/components/homePage/blog/Blog";
import ChooseUs from "@/components/homePage/chooseUs/ChooseUs";
import Mission from "@/components/homePage/mission/Mission";
import MarqueeLine from "@/components/shared/marquee/MarqueeLine";

export default function HomePage() {
  return (
    <>
      <MarqueeLine />
      <About />
      <ChooseUs />
      <Mission />
      <Blog />
      <MarqueeLine className="hidden lg:block lg:text-[26px] lg:h-[65px]" />
    </>
  );
}
