import { twMerge } from "tailwind-merge";

import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/constants/constants";
import InstagramIcon from "../icons/InstagramIcon";
import FacebookIcon from "../icons/FacebookIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

interface SocialMediaProps {
  className?: string;
  iconClassName?: string;
  iconStrokeColor?: string;
}

export default function SocialMedia({
  className = "",
  iconClassName = "",
  iconStrokeColor = "var(--color-blue)",
}: SocialMediaProps) {
  return (
    <ul className={twMerge("flex items-center gap-[21px]", className)}>
      <li>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="flex items-center text-white active:text-gray-300 xl:hover:text-gray-300 focus-visible:text-gray-300 transition duration-300 ease-in-out"
        >
          <InstagramIcon
            className={twMerge("h-6 lg:h-7 w-auto", iconClassName)}
            strokeColor={iconStrokeColor}
          />
        </a>
      </li>
      <li>
        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="flex items-center text-white active:text-gray-300 xl:hover:text-gray-300 focus-visible:text-gray-300 transition duration-300 ease-in-out"
        >
          <FacebookIcon
            className={twMerge("h-6 lg:h-7 w-auto", iconClassName)}
            strokeColor={iconStrokeColor}
          />
        </a>
      </li>
      <li>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="flex items-center text-white active:text-gray-300 xl:hover:text-gray-300 focus-visible:text-gray-300 transition duration-300 ease-in-out"
        >
          <LinkedinIcon
            className={twMerge("h-6 lg:h-7 w-auto", iconClassName)}
            strokeColor={iconStrokeColor}
          />
        </a>
      </li>
    </ul>
  );
}
