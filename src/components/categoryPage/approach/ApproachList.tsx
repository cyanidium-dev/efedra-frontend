interface ApproachListProps {
  list: { title: string; description: string }[];
  variant: "blue" | "beige";
}

export default function ApproachList({ list, variant }: ApproachListProps) {
  return (
    <ul
      className={`flex flex-col shrink-0 ${
        variant === "blue"
          ? "pt-2 xl:pt-2 gap-8 xl:gap-25"
          : "pt-1 xl:pt-3 gap-9 xl:gap-30"
      }`}
    >
      {list.map(({ title, description }, idx) => (
        <li
          key={idx}
          className={`max-w-[167px] xl:max-w-[310px] ${
            idx === 1 ? "-ml-14 xl:ml-[-129px]" : ""
          } ${idx === 2 ? "-ml-14 xl:ml-[-122px]" : ""}
          }`}
        >
          <h3 className="mb-1 font-evolenta text-[12px] xl:text-[16px] font-normal leading-[120%] uppercase">
            {title}
          </h3>
          <p className="text-[10px] xl:text-[14px] font-light leading-[120%]">
            {description}
          </p>
        </li>
      ))}
    </ul>
  );
}
