import { Service } from "@/types/service";
import Image from "next/image";

interface CategoriesListAestheticProps {
  categories: Service[];
}

export default function CategoriesListAesthetic({
  categories,
}: CategoriesListAestheticProps) {
  const currentCategories = categories?.slice(0, 5);

  return (
    <div className="flex flex-col gap-2 lg:gap-[23px]">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="relative flex items-end w-[calc(50%-4px)] h-[130px] py-1.5 px-2.5 rounded-[14px] overflow-hidden">
            <div className="absolute -z-10 inset-0 bg-[linear-gradient(193.03deg,rgba(0,0,0,0)_44.79%,rgba(0,0,0,0.5)_88.65%)]" />
            <Image
              src={currentCategories[0].categoryImage}
              alt={currentCategories[0].title}
              fill
              className="-z-20 object-cover"
            />
            <h3 className="font-evolenta text-[10px] font-normal leading-[133%] text-white uppercase">
              {currentCategories[0].title}
            </h3>
          </div>
          <div className="relative flex items-end w-[calc(50%-4px)] h-[130px] py-1.5 px-2.5 rounded-[14px] overflow-hidden">
            <div className="absolute -z-10 inset-0 bg-[linear-gradient(193.03deg,rgba(0,0,0,0)_44.79%,rgba(0,0,0,0.5)_88.65%)]" />
            <Image
              src={currentCategories[1].categoryImage}
              alt={currentCategories[1].title}
              fill
              className="-z-20 object-cover"
            />
            <h3 className="font-evolenta text-[10px] font-normal leading-[133%] text-white uppercase">
              {currentCategories[1].title}
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="relative flex items-end w-full h-[105px] py-1.5 px-2.5 rounded-[14px] overflow-hidden">
            <div className="absolute -z-10 inset-0 bg-[linear-gradient(193.03deg,rgba(0,0,0,0)_44.79%,rgba(0,0,0,0.5)_88.65%)]" />
            <Image
              src={currentCategories[2].categoryImage}
              alt={currentCategories[2].title}
              fill
              className="-z-20 object-cover object-[center_-220px]"
            />
            <h3 className="font-evolenta text-[10px] font-normal leading-[133%] text-white uppercase">
              {currentCategories[2].title}
            </h3>
          </div>
          <div className="relative flex items-end w-full h-[105px] py-1.5 px-2.5 rounded-[14px] overflow-hidden">
            <div className="absolute -z-10 inset-0 bg-[linear-gradient(193.03deg,rgba(0,0,0,0)_44.79%,rgba(0,0,0,0.5)_88.65%)]" />
            <Image
              src={currentCategories[3].categoryImage}
              alt={currentCategories[3].title}
              fill
              className="-z-20 object-cover"
            />
            <h3 className="font-evolenta text-[10px] font-normal leading-[133%] text-white uppercase">
              {currentCategories[3].title}
            </h3>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="relative flex items-end w-full h-[130px] py-1.5 px-2.5 rounded-[14px] overflow-hidden">
          <div className="absolute -z-10 inset-0 bg-[linear-gradient(193.03deg,rgba(0,0,0,0)_44.79%,rgba(0,0,0,0.5)_88.65%)]" />
          <Image
            src={currentCategories[4].categoryImage}
            alt={currentCategories[4].title}
            fill
            className="-z-20 object-cover"
          />
          <h3 className="font-evolenta text-[10px] font-normal leading-[133%] text-white uppercase">
            {currentCategories[4].title}
          </h3>
        </div>
        {currentCategories?.length > 5 ? (
          <div className="relative flex items-end w-[calc(50%-4px)] h-[130px] py-1.5 px-2.5 rounded-[14px] overflow-hidden">
            <div className="absolute -z-10 inset-0 bg-[linear-gradient(193.03deg,rgba(0,0,0,0)_44.79%,rgba(0,0,0,0.5)_88.65%)]" />
            <Image
              src={currentCategories[5].categoryImage}
              alt={currentCategories[5].title}
              fill
              className="-z-20 object-cover"
            />
            <h3 className="font-evolenta text-[10px] font-normal leading-[133%] text-white uppercase">
              {currentCategories[5].title}
            </h3>
          </div>
        ) : null}
      </div>
    </div>
  );
}
