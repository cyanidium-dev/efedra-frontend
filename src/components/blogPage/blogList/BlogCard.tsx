import MainButton from "@/components/shared/buttons/MainButton";
import DirectionTag from "@/components/shared/directionTag/DirectionTag";
import EstimatedReadingTime from "@/components/shared/estReadingTime/estimatedReadingTime";
import { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { title, image, direction, slug, description, createdAt } = post;

  const formattedDate = formatDate(createdAt);

  return (
    <Link
      href={`/blog/${slug}`}
      className="flex flex-col h-full rounded-[20px] border overflow-hidden"
    >
      <div className="relative w-full h-[223px] lg:h-[245px]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-between flex-grow py-4 px-2">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <EstimatedReadingTime post={post} />
            <div className="flex items-center gap-1.5">
              <Image
                src="/images/icons/calendar.svg"
                alt="clock"
                width="12"
                height="12"
              />
              <p className="text-[10px] xl:text-[12px] font-normal leading-[120%]">
                {formattedDate}
              </p>
            </div>
            <DirectionTag direction={direction} />
          </div>
          <h2 className="mb-2 font-evolenta text-[16px] font-normal leading-[133%] uppercase">
            {title}
          </h2>
        </div>
        <div>
          <p className="mb-5 text-[12px] font-normal leading-[120%] line-clamp-4">
            {description}
          </p>
          <MainButton
            variant="beige"
            className="h-[42px] text-[14px] font-medium"
          >
            Читаті далі
          </MainButton>
        </div>
      </div>
    </Link>
  );
}
