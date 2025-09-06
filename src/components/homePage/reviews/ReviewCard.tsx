import { Review } from "@/types/review";
import Image from "next/image";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const { name, photo, direction, text } = review;

  return (
    <div className="p-6 rounded-[20px] border border-beige">
      <div className="flex gap-3 items-center mb-8">
        <Image src={photo} alt={name} width={64} height={64} />
        <div>
          <h3 className="mb-1.5 font-evolenta text-[15px] font-normal leading-[133%] uppercase">
            {name}
          </h3>
          <p className="text-[13px] font-normal leading-[120%]">{direction}</p>
        </div>
      </div>
      <p className="text-[14px] font-light leading-[120%]">{text}</p>
    </div>
  );
}
