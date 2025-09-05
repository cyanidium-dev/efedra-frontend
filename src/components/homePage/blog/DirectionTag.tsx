import Image from "next/image";

interface DirectionTagProps {
  direction: string;
}

export default function DirectionTag({ direction }: DirectionTagProps) {
  return (
    <div className="flex items-center gap-[5px] shrink-0 w-fit px-3 py-1 rounded-full bg-white">
      <Image
        src="/images/icons/price-tag.svg"
        alt="clock"
        width="11"
        height="11"
      />
      <p className="text-[12px] font-normal leading-[120%]">
        {direction === "aesthetic" ? "Естетична медицина" : "Стоматологія"}
      </p>
    </div>
  );
}
