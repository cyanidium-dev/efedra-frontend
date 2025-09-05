import Image from "next/image";
import { calculateReadingTime } from "@/utils/calculateReadingTime";
import { Post } from "@/types/post";

interface EstimatedReadingTimeProps {
  post: Post;
}

export default function EstimatedReadingTime({
  post,
}: EstimatedReadingTimeProps) {
  const readingTime = calculateReadingTime(post);

  return (
    <div className="flex items-center gap-[5px] shrink-0 w-fit px-3 py-1 rounded-full bg-white">
      <Image src="/images/icons/clock.svg" alt="clock" width="12" height="12" />
      <p className="text-[12px] font-normal leading-[120%]">{readingTime} хв</p>
    </div>
  );
}
