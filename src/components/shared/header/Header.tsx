"use client";
import { useState } from "react";
import Link from "next/link";
import Container from "../container/Container";
import LogoIcon from "../icons/LogoIcon";
import BurgerMenu from "./burgerMenu/BurgerMenu";
import NavMenu from "./navMenu/NavMenu";
import { navListOne, navListTwo } from "./navMenu/navMenuData";

export default function Header() {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-dvw py-6">
      <Container className="flex items-center justify-between">
        <NavMenu navList={navListOne} className="hidden lg:flex" />
        <Link href="/">
          <LogoIcon className="w-[86px] xl:w-[120px] h-auto xl:hover:text-beige focus-visible:text-beige transition duration-300 ease-in-out" />
        </Link>
        <NavMenu navList={navListTwo} className="hidden lg:flex" />
        <BurgerMenu
          isOpenBurgerMenu={isOpenBurgerMenu}
          setIsOpenBurgerMenu={setIsOpenBurgerMenu}
        />
      </Container>
    </header>
  );
}
