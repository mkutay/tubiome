import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import fs from 'fs';
import matter from 'gray-matter';
import { format } from 'date-fns';
import remarkGfm from 'remark-gfm';
import remarkLint from 'remark-lint';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { title } from '@/components/primitives';
import Link from 'next/link';

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkLint, remarkMath],
    rehypePlugins: [rehypeKatex],
  }
};

export function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const blog = getPost(params);
  const formattedDate = format(blog.meta.date, 'PP');

  return {
    title: blog.meta.title,
    description: blog.meta.description,
    keywords: blog.meta.tags,
    author: blog.meta.authors,
    openGraph: {
      title: blog.meta.title,
      description: blog.meta.description,
      url: siteConfig.url + 'blog/' + slug,
      locale: 'tr_TR',
      type: 'article',
      publishedTime: formattedDate,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const props = getPost(params);
  const formattedDate = format(props.meta.date, 'PP');

  return (
    <div className="prose dark:prose-invert">
      <h1 className={title()}>
        {props.meta.title}
      </h1>
      <div className="font-semibold my-4">
        <span>
          {formattedDate}
        </span>
        <span className="px-2 text-lg">
          ·
        </span>
        {props.meta.authors.map((author: { name: string, url: string }) => (
          <span key={author.name}>
            <span>
              <Link
                href={author.url}
              >
                {author.name}
              </Link>
            </span>
            <span className="px-2 text-lg">
              ·
            </span>
          </span>
        ))}
        {props.meta.tags.map((tag: string) => (
          <span key={tag}>
            [{tag}]
          </span>
        ))}
      </div>
      <p className="text-right italic">
        {props.meta.description}
      </p>
      <hr className="my-4" />
      <main>
        <MDXRemote source={props.content} options={options}/>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'app/blog/postlar'));

  return files.map(filename => ({
    slug: filename.replace('.mdx', ''),
  }));
}

function getPost({ slug }: { slug : string }) {
  let markdownFile;
  try {
    markdownFile = fs.readFileSync(path.join(process.cwd(), `app/blog/postlar/${slug}.mdx`), 'utf-8');
  } catch(error) {
    notFound();
  }
  const { data: frontMatter, content } = matter(markdownFile);

  return {
    meta: frontMatter,
    slug: slug,
    content: content,
  };
}