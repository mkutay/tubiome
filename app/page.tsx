import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { InstagramIcon, YoutubeIcon } from "@/components/icons";
import getPosts from "@/app/lib/blog/getPosts";
import {
  Card, CardHeader, CardBody, CardFooter
} from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import ReadMoreButton from "@/components/readMoreButton";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function Home() {
  const posts = getPosts(0, 4);

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

      <Divider className="my-16"/>

      <div className="max-w-6xl mb-16">
        <h1 className={title()}>Son&nbsp;</h1>
        <Link href="/blog/sayfa/1" className={title({ color: "blue" })}>
          <h1 className={title({ color: "blue" })}>
            Blog Postlarımız
          </h1>
        </Link>
        <div className="gap-3 grid sm:grid-cols-2 grid-cols-1 mt-8 md:mt-10">
          {posts.map((post, index) => (
            <Card className="max-w-2xl" key={`${post}-${index}`} shadow="md">
              <CardHeader className="flex flex-col prose dark:prose-invert">
                <p className="text-xl font-semibold my-0">{post.meta.title}</p>
                <p className="text-sm my-0 italic text-center">{post.meta.description}</p>
              </CardHeader>
              <Divider className="my-0"/>
              <CardBody className="prose dark:prose-invert">
                {/* @ts-expect-error Async Server Component */}
                <MDXRemote source={post.meta.excerpt}/>
              </CardBody>
              <Divider className="my-0"/>
              <CardFooter className="prose dark:prose-invert items-center justify-center">
                <Link
                  href={`/blog/${post.slug}`}
                >
                  <ReadMoreButton text="Devamını Oku"/>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
