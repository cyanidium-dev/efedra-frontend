import { SCHEDULE } from "@/constants/constants";
import FooterSubtitle from "./FooterSubtitle";

export default function Schedule() {
  return (
    <div>
      <FooterSubtitle>Графік роботи:</FooterSubtitle>
      {SCHEDULE.map((item, idx) => (
        <div
          key={idx}
          className={`${
            idx === 0 ? "mb-4" : ""
          } text-[12px] font-normal leading-[123%]`}
        >
          <p>{item.category}:</p>
          <p>{item.schedule}</p>
        </div>
      ))}
    </div>
  );
}
