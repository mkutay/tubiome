import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { InstagramIcon, YoutubeIcon } from "@/components/icons";
import BlogPostCards from "@/components/blogPostCards";
import { Divider } from "@nextui-org/divider";
import {
  Card, CardHeader, CardBody, CardFooter
} from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function Home() {
  let items: {
    label: string,
    href: string,
    biome: string,
    color: string,
    slug: string,
  }[] = [];

  if (siteConfig.navItems[0].dropdownItems) {
    items.push(siteConfig.navItems[0].dropdownItems[0]);
    items.push(siteConfig.navItems[0].dropdownItems[1]);
    items.push(siteConfig.navItems[0].dropdownItems[3]);
    items.push(siteConfig.navItems[0].dropdownItems[4]);
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="inline-block max-w-2xl text-center justify-center">
        <h1 className={title()}>Türkiye&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Bilim Olimpiyatları&nbsp;</h1>
        <br />
        <h1 className={title()}>
          Mezunları Topluluğu
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Biz bilime gönül vermiş; kimimiz okul sırasında, kimimiz atıldığı hayatta öğrenmeyi bırakmayan bir topluluğuz.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.instagram}
        >
          <InstagramIcon size={20} />
          Instagram
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.youtube}
        >
          <YoutubeIcon size={20} />
          Youtube
        </Link>
      </div>

      <Divider className="sm:my-16 my-10"/>

      <div className="max-w-6xl">
        <h1 className={title()}>Son&nbsp;</h1>
        <Link href="/blog/sayfa/1" className={title({ color: "blue" })}>
          <h1 className={title({ color: "blue" })}>
            Blog Postlarımız
          </h1>
        </Link>
        <div className="gap-3 grid sm:grid-cols-2 grid-cols-1 mt-8 md:mt-10">
          <BlogPostCards startInd={0} endInd={4}/>
        </div>
      </div>

      <Divider className="sm:my-16 my-10"/>

      <div className="max-w-6xl sm:mb-16 mb-10">
        <Link href="/blog/sayfa/1" className={title({ color: "blue" })}>
          <h1 className={title({ color: "cyan" })}>
            Olimpiyat&nbsp;
          </h1>
        </Link>
        <h1 className={title()}>Branşları</h1>
        <div className="gap-3 grid grid-cols-2 mt-8 md:mt-10">
          {items.map((item, index) => (
            <Link href={item.href} key={index}>
              <Card shadow="sm" isPressable isFooterBlurred radius="md">
                <CardBody className="overflow-visible p-0">
                  <Image
                    alt={item.label}
                    className="object-cove8r"
                    src={`/fotograflar/branslar/${item.biome}.jpg`}
                  />
                </CardBody>
                <CardFooter
                  className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10"
                >
                  <p className="text-white/75 sm:text-xl text-lg font-bold">{item.label}</p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
