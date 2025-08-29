import FooterSubtitle from "./FooterSubtitle";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/constants/constants";
import InstagramIcon from "../icons/InstagramIcon";
import FacebookIcon from "../icons/FacebookIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

export default function FollowUs() {
  return (
    <div>
      <FooterSubtitle>Слідкуйте за нами</FooterSubtitle>
      <ul className="flex items-center gap-[21px]">
        <li>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex items-center text-white active:text-gray-300 xl:hover:text-gray-300 focus-visible:text-gray-300 transition duration-300 ease-in-out"
          >
            <InstagramIcon className="h-6 lg:h-7 w-auto" />
          </a>
        </li>
        <li>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex items-center text-white active:text-gray-300 xl:hover:text-gray-300 focus-visible:text-gray-300 transition duration-300 ease-in-out"
          >
            <FacebookIcon className="h-6 lg:h-7 w-auto" />
          </a>
        </li>
        <li>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex items-center text-white active:text-gray-300 xl:hover:text-gray-300 focus-visible:text-gray-300 transition duration-300 ease-in-out"
          >
            <LinkedinIcon className="h-6 lg:h-7 w-auto" />
          </a>
        </li>
      </ul>
    </div>
  );
}
