'use client';

import { title } from "@/components/primitives";
import {
  Card, CardHeader, CardBody, CardFooter
} from "@nextui-org/card";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className={`${title()}`}>Branşlar</h1>
      <div className="gap-2 grid grid-cols-2 md:grid-cols-5 mt-8 md:mt-10">
        {siteConfig.navItems[0].dropdownItems?.map((item, index) => (
          <Link href={item.href} key={index}>
            <Card shadow="sm" isPressable isFooterBlurred radius="md" className="lg:size-[200px] sm:[140px]">
              <CardBody className="overflow-visible p-0">
                <Image
                  width={220}
                  height={220}
                  alt={item.label}
                  className="w-full object-cover h-[200px]"
                  src={`/fotograflar/branslar/${item.biome}-square.jpg`}
                />
              </CardBody>
              <CardFooter
                className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10"
              >
                <b className="text-white/75">{item.label}</b>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
