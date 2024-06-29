'use client';

import { redirect } from "next/navigation";
import { Pagination, PaginationItem, PaginationCursor } from "@nextui-org/pagination";

export default function BlogPagination(
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
    <Pagination
      total={Math.ceil(postsLength / 4)}
      initialPage={1}
      variant="bordered"
      onChange={((page: number) => { redirect(`/blog/sayfalar/${page}`) })}
    />
  )
}