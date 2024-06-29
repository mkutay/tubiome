import { Link } from "@nextui-org/link";
import {
  TwitterIcon,
  SearchIcon,
  Logo,
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
  YoutubeIcon,
  ChevronDownIcon,
  HeartFilledIcon
} from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="w-full flex place-content-center py-4 bg-neutral-100 dark:bg-neutral-900">
      <div className="flex flex-row gap-2 mr-2">
        <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
          <TwitterIcon className="text-default-700" />
        </Link>
        <Link isExternal aria-label="Instagram" href={siteConfig.links.instagram}>
          <InstagramIcon className="text-default-700" />
        </Link>
        <Link isExternal aria-label="Facebook" href={siteConfig.links.facebook}>
          <FacebookIcon className="text-default-700" />
        </Link>
        <Link isExternal aria-label="Linkedin" href={siteConfig.links.linkedin}>
          <LinkedinIcon className="text-default-700" />
        </Link>
        <Link isExternal aria-label="Youtube" href={siteConfig.links.youtube}>
          <YoutubeIcon className="text-default-700" width={32} height={24}/>
        </Link>
      </div>
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="https://www.mkutay.dev/"
        title="mkutay.dev ana sayfa"
      >
        <HeartFilledIcon className="text-default-700"/>
      </Link>
    </footer>
  );
}