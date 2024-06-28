import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { InstagramIcon, YoutubeIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
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
    </section>
  );
}
