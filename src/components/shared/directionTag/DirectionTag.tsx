import Image from "next/image";

interface DirectionTagProps {
  direction: string;
  className?: string;
}

export default function DirectionTag({
  direction,
  className = "",
}: DirectionTagProps) {
  return (
    <div className={`flex items-center gap-[5px] shrink-0 w-fit ${className}`}>
      <Image
        src="/images/icons/price-tag.svg"
        alt="clock"
        width="11"
        height="11"
      />
      <p className="text-[10px] xl:text-[12px] font-normal leading-[120%]">
        {direction === "aesthetic" ? "Естетична медицина" : "Стоматологія"}
      </p>
    </div>
  );
}
