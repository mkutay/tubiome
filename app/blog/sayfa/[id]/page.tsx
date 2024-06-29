import getPosts, { getPostsLength } from "@/app/lib/blog/getPosts";
import { Divider } from "@nextui-org/divider";
import { title } from "@/components/primitives";
import Link from 'next/link';
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Pagination, PaginationItem, PaginationCursor } from "@nextui-org/pagination";
import { redirect } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import BlogPagination from "@/app/ui/blog/blogPagination";
import ReadMoreButton from "@/app/ui/blog/readMoreButton";

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
    <div className="prose dark:prose-invert">
      <h1 className={title()}>
        Blog Postlarımız
      </h1>
      <div className="mt-8">
        {posts.map((post, index) => (
          <Card className="max-w-2xl mt-4" key={`${post}-${index}`}>
            <CardHeader className="flex flex-col prose dark:prose-invert">
              <p className="text-xl font-semibold my-0">{post.meta.title}</p>
              <p className="text-sm my-0 italic text-center">{post.meta.description}</p>
            </CardHeader>
            <Divider className="my-0"/>
            <CardBody className="prose dark:prose-invert">
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
      <BlogPagination params={params} posts={posts}/>
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