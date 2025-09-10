import Image from "next/image";
import { calculateReadingTime } from "@/utils/calculateReadingTime";
import { Post } from "@/types/post";

interface EstimatedReadingTimeProps {
  post: Post;
  className?: string;
}

export default function EstimatedReadingTime({
  post,
  className = "",
}: EstimatedReadingTimeProps) {
  const readingTime = calculateReadingTime(post);

  return (
    <div className={`flex items-center gap-[5px] shrink-0 w-fit ${className}`}>
      <Image src="/images/icons/clock.svg" alt="clock" width="12" height="12" />
      <p className="text-[10px] xl:text-[12px] font-normal leading-[120%]">
        {readingTime} хв
      </p>
    </div>
  );
}
