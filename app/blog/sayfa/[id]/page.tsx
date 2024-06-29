import getPosts, { getPostsLength } from "@/app/lib/blog/getPosts";
import remarkGfm from 'remark-gfm';
import BlogPaginatedPage from "@/app/blog/sayfa/[id]/index";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  }
};

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

  const posts: {
    slug: string,
    meta: { [key: string]: any }
  }[] = getPosts(4 * (id - 1), 4 * id);

  return (
    <div suppressHydrationWarning>
      <BlogPaginatedPage params={params} posts={posts}/>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getPosts(0, 100000);

  let ret: {id: string}[] = [];
  for (let i = 1; i <= Math.ceil(posts.length / 4); i++) {
    ret.push({ id: i.toString() });
  }

  return ret;
}