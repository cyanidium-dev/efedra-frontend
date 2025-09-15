"use client";

import { motion, AnimatePresence } from "framer-motion";
import ArrowIcon from "@/components/shared/icons/ArrowIcon";
import { useState } from "react";

interface AccordionProps {
  title: string;
  colorScheme: string;
  children: React.ReactNode;
}

export default function Accordion({
  title,
  colorScheme,
  children,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <motion.div
        onClick={() => setIsOpen((prev) => !prev)}
        animate={{
          borderRadius: isOpen ? "32px 32px 0 0" : "32px",
          backgroundColor: isOpen ? "var(--color-gray)" : "var(--color-white)",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`relative w-full flex justify-between items-center pt-[18px] pb-[19px] px-6 text-left border border-${colorScheme}  cursor-pointer max-h-[57px]`}
      >
        <p
          className={`leading-[135%] md:text-[16px] md:leading-[132%] ${isOpen ? `font-medium` : "font-normal"}`}
        >
          {title}
        </p>
        <motion.span
          animate={{ rotate: isOpen ? 0 : 65 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ArrowIcon
            className="w-[21px] h-[17px] md:w-[26px] md:h-[21px]"
            strokeColor="var(--color-white)"
          />
        </motion.span>
        {isOpen && (
          <span className="absolute bottom-0 left-0 right-0 h-px bg-white z-10"></span>
        )}
      </motion.div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
