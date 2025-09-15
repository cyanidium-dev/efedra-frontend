import { PriceService } from "@/types/price";

interface ServiceListProps {
  services: PriceService[];
}

export default function ServiceList({ services }: ServiceListProps) {
  return (
    <>
      <div className="hidden md:grid md:grid-cols-[2.5fr_1.75fr_0.30fr] pl-[46px] pr-[27px] py-[18px] uppercase font-evolenta border-x">
        <p className="text-left">Назва послуги</p>
        <p className="text-center">Вартість</p>
        <p className="text-center">Час (хв)</p>
      </div>

      {services
        .filter((service) => service?.title)
        .map((service, idx, arr) => {
          const isLast = idx === arr.length - 1;
          return (
            <div
              key={idx}
              className={`flex flex-col md:grid md:grid-cols-[2.5fr_1.75fr_0.30fr] px-3 py-4 md:pl-[46px] md:pr-[27px] md:pt-[10px] md:pb-[13px] gap-3 transition border-t-[0.5px] border-x ${
                isLast ? "border-b rounded-b-[32px] pb-6 md:pb-[19px]" : ""
              }`}
            >
              <p className="text-[12px] md:text-[14px] leading-[133%] md:leading-[150%] md:text-left">
                {service.title}
              </p>

              <div className="flex justify-between md:hidden">
                <p className="text-[12px] md:text-[14px] leading-[133%]">
                  {service.price || <span className="text-gray-400">—</span>}
                </p>
                <p className="text-[12px] md:text-[14px] leading-[133%]">
                  {service.duration ? (
                    <>{service.duration}хв</>
                  ) : (
                    <span>—</span>
                  )}
                </p>
              </div>

              <p className="hidden md:block text-[12px] md:text-[14px] leading-[133%] md:text-center">
                {service.price || <span>—</span>}
              </p>
              <p className="hidden md:block text-[12px] md:text-[14px] leading-[133%] md:text-center">
                {service.duration ? <>{service.duration}</> : <span>—</span>}
              </p>
            </div>
          );
        })}
    </>
  );
}
