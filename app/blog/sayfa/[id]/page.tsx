import { getPostsLength } from "@/app/lib/blog/getPosts";
import { title } from "@/components/primitives";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import BlogPagination from "@/components/blogPagination";
import BlogPostCards from "@/components/blogPostCards";

export function generateMetadata({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const postsLength = getPostsLength();

  return {
    title: `Postlar | Sayfa ${id}`,
    description: `${Math.ceil(postsLength / 4)} sayfa arasından sayfa ${id} için tüm blog postlarımızın listesi`,
    openGraph: {
      title: `Postlar | Sayfa ${id}`,
      description: `${Math.ceil(postsLength / 4)} sayfa arasından sayfa ${id} için tüm blog postlarımızın listesi`,
      url: siteConfig.url + 'blog/sayfa/' + id,
    },
  };
}

export default function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);

  const postsLength = getPostsLength();

  if (4 * (id - 1) >= postsLength || id <= 0) {
    notFound();
  }

  return (
    <div className="prose dark:prose-invert mb-8">
      <h1 className={title()}>
        Blog Postlarımız
      </h1>
      <div className="mt-8 flex flex-col gap-3">
        <BlogPostCards startInd={4 * (id - 1)} endInd={4 * id}/>
      </div>
      <BlogPagination params={params} postsLength={postsLength}/>
    </div>
  );
}

export async function generateStaticParams() {
  const postsLength = getPostsLength();

  let ret: {id: string}[] = [];
  for (let i = 1; i <= Math.ceil(postsLength / 4); i++) {
    ret.push({ id: i.toString() });
  }

  return ret;
}