'use client';

import { redirect } from "next/navigation";
import { Pagination, PaginationItem, PaginationCursor } from "@nextui-org/pagination";
import { title } from "@/components/primitives";
import Link from 'next/link';

export default function BlogPaginatedPage(
  { params, posts }: { 
    params: { id: string },
    posts: {
      slug: string,
      meta: { [key: string]: any },
    }[],
  },
) {
  const postsLength = posts.length;

  return (
    <div className="prose dark:prose-invert">
      <h1 className={title()}>
        Blog Postlarımız
      </h1>
      <div className="mt-4">
        {posts.map((post, index) => (
          <div key={post.slug} className="prose-h2:mt-4 prose-h2:mb-4">
            <h2>
              <Link
                href={'/blog/' + post.slug}
                passHref
                key={post.slug}
              >
                {post.meta.title}
              </Link>
            </h2>
            <em className="not-prose my-4">
              {post.meta.description}
            </em>
            {/* <div className="prose-p:my-4 prose-p:py-0">
              <MDXRemote source={post.meta.excerpt} options={options}/>
            </div>
            {index !== posts.length - 1 && <hr/>} */}
          </div>
        ))}
      </div>
      <Pagination
        total={Math.ceil(postsLength / 4)}
        initialPage={1}
        variant="bordered"
        onChange={((page: number) => { redirect(`/blog/sayfalar/${page}`) })}
      />
    </div>
  )
}