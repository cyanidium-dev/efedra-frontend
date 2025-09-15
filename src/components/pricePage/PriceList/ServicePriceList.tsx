import { PriceService } from "@/types/price";
import { twMerge } from "tailwind-merge";

interface ServiceListProps {
  services: PriceService[];
  colorScheme: "beige" | "blue" | "black";
}

export default function ServiceList({
  services,
  colorScheme,
}: ServiceListProps) {
  return (
    <>
      <div
        className={`hidden md:grid md:grid-cols-[2.5fr_1.75fr_0.7fr] lg:grid-cols-[2.5fr_1.75fr_0.5fr] border-x rounded-b-[32px] border-b border-t-[0.5px] border-${colorScheme}`}
      >
        <div className="pl-[46px] py-[18px] uppercase font-evolenta text-[12px] md:text-[14px] text-left">
          Назва послуги
        </div>
        <div className="py-[18px] uppercase font-evolenta text-[12px] md:text-[14px] text-center">
          Вартість
        </div>
        <div className="pr-[27px] py-[18px] uppercase font-evolenta text-[12px] md:text-[14px] text-center">
          Час (хв)
        </div>

        {services
          .filter((service) => service?.title)
          .map((service, idx, arr) => {
            const isLast = idx === arr.length - 1;
            return (
              <div key={idx} className={`contents`}>
                <div
                  key={`title-${idx}`}
                  className={twMerge(
                    `pl-[46px] pt-[10px] pb-[13px] text-[12px] md:text-[14px] leading-[150%] text-left border-t-[0.5px] border-${colorScheme} ${
                      isLast ? "pb-6" : ""
                    }`
                  )}
                >
                  {service.title}
                </div>
                <div
                  key={`price-${idx}`}
                  className={twMerge(
                    `pt-[10px] pb-[13px] text-[12px] md:text-[14px] text-center border-t-[0.5px] border-${colorScheme} ${
                      isLast ? "pb-6" : ""
                    }`
                  )}
                >
                  {service.price || <span>—</span>}
                </div>
                <div
                  key={`duration-${idx}`}
                  className={twMerge(`pr-[27px] pt-[10px] pb-[13px] text-[12px] md:text-[14px] text-center border-t-[0.5px] border-${colorScheme} ${
                    isLast ? "pb-6" : ""
                  }
                `)}
                >
                  {service.duration || <span>—</span>}
                </div>
              </div>
            );
          })}
      </div>

      <div className="md:hidden">
        {services
          .filter((service) => service?.title)
          .map((service, idx, arr) => {
            const isLast = idx === arr.length - 1;
            return (
              <div
                key={idx}
                className={`flex flex-col gap-2 px-3 py-4 text-sm border-t-[0.5px] border-x border-${colorScheme} ${
                  isLast ? "border-b rounded-b-[32px] pb-6" : ""
                }`}
              >
                <p className="text-[12px] leading-[133%]">{service.title}</p>
                <div className="flex justify-between text-[12px] leading-[133%]">
                  <span>{service.price || "—"}</span>
                  <span>
                    {service.duration ? `${service.duration} хв` : "—"}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
