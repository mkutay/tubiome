'use client';

import { redirect } from "next/navigation";
import { Pagination, PaginationItem, PaginationCursor } from "@nextui-org/pagination";

export default function BlogPagination(
  { params, postsLength }: { 
    params: { id: string },
    postsLength: number,
  },
) {
  return (
    <Pagination
      total={Math.ceil(postsLength / 4)}
      initialPage={1}
      variant="bordered"
      onChange={((page: number) => { redirect(`/blog/sayfalar/${page}`) })}
    />
  )
}