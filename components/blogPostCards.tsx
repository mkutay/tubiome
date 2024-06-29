import getPosts from "@/app/lib/blog/getPosts";
import {
  Card, CardHeader, CardBody, CardFooter
} from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import ReadMoreButton from "@/components/readMoreButton";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Link } from "@nextui-org/link";

export default function BlogPostCards({ startInd, endInd }: { startInd: number, endInd: number }) {
  const posts = getPosts(startInd, endInd);

  return (
    <>
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
    </>
  );
}