'use client';

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { dropdown, link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  SearchIcon,
  Logo,
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
  YoutubeIcon,
  ChevronDownIcon,
} from "@/components/icons";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem
} from "@nextui-org/dropdown";
import { Button, ButtonGroup } from "@nextui-org/button";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  let itemProps: { label: string, href: string, biome: string, color: string } = {
    label: 'Fizik',
    href: '/branslar/fizik',
    biome: 'grove',
    color: '',
  };

  siteConfig.navItems[0].dropdownItems?.forEach((item) => {
    if (item.href == pathname) {
      itemProps = item;
    }
  });

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Ara..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0 bg-[#A6A8A7] dark:bg-[#494B4A] bg-[#DC8616] dark:bg-[#4D1803] bg-[#CAB59D] dark:bg-[#5B4539] bg-[#D1976E] dark:bg-[#785A3F] bg-[#BDA1A7] dark:bg-[#84636B] bg-[#727B59] dark:bg-[#0A3C11] bg-[#7A7D58] dark:bg-[#464B34] bg-[#89877A] dark:bg-[#494A43] bg-[#737557] dark:bg-[#353C26] bg-[#987257] dark:bg-[#3D2F27]" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className={itemProps.color}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">TÜBİOME</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2 place-items-center">
          {siteConfig.navItems.map((item) => (
            (typeof item.dropdownItems == "undefined" ? (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ) : (
              <ButtonGroup variant="bordered" key={item.label}>
                <Button>
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                    )}
                    color="foreground"
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </Button>
                <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Button isIconOnly>
                    <ChevronDownIcon />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Link Actions">
                  {item.dropdownItems.map((dropdownItem) => (
                    <DropdownItem key={dropdownItem.label} href={dropdownItem.href}>
                      {dropdownItem.label}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              </ButtonGroup>
            ))
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Instagram" href={siteConfig.links.instagram}>
            <InstagramIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Facebook" href={siteConfig.links.facebook}>
            <FacebookIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Linkedin" href={siteConfig.links.linkedin}>
            <LinkedinIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Youtube" href={siteConfig.links.youtube}>
            <YoutubeIcon className="text-default-500" width={32} height={24}/>
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Instagram" href={siteConfig.links.instagram}>
          <InstagramIcon className="text-default-500" />
        </Link>
        <Link isExternal aria-label="Youtube" href={siteConfig.links.youtube}>
          <YoutubeIcon className="text-default-500" width={32} height={24}/>
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
