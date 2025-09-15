"use client";
import * as motion from "motion/react-client";
import Container from "@/components/shared/container/Container";
import Accordion from "./Accordion";
import { listItemVariants, listVariants } from "@/utils/animationVariants";
import { PriceCategory } from "@/types/price";
import ServiceList from "./ServicePriceList";

interface PriceListProps {
  categories: PriceCategory[];
}

export default function PriceList({ categories }: PriceListProps) {
  return (
    <section className="py-15 md:pt-[100px] md:pb-[130px]">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.4 }}
          variants={listVariants({ staggerChildren: 0.3, delayChildren: 0.3 })}
          className="flex flex-col gap-[44px]"
        >
          {categories
            .filter((category) => category?.subcategories?.length)
            .map((category, idx) => (
              <motion.div
                viewport={{ once: true, amount: 0.2 }}
                variants={listItemVariants}
                key={idx}
              >
                <h2
                  className={`text-[14px] md:text-[16px] text-white leading-[135%] font-evolenta uppercase bg-${category.colorScheme} opacity-80 px-3 py-1 inline-block rounded-full mb-[26px] md:mb-6`}
                >
                  {category.title}
                </h2>

                <div className="flex flex-col gap-4">
                  {category.subcategories
                    .filter((subcategory) => subcategory?.services?.length)
                    .map((subcategory, idx) => (
                      <Accordion
                        key={idx}
                        title={subcategory.title}
                        colorScheme={category.colorScheme}
                      >
                        <ServiceList services={subcategory.services || []} />
                      </Accordion>
                    ))}
                </div>
              </motion.div>
            ))}
        </motion.div>
      </Container>
    </section>
  );
}
