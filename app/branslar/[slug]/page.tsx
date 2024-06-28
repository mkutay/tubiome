import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import fs from 'fs';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import remarkLint from 'remark-lint';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { title } from '@/components/primitives';

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkLint, remarkMath],
    rehypePlugins: [rehypeKatex],
  }
};

export function generateMetadata({ params }: { params: { slug: string } }) {
  const props = getSubject(params);

  return {
    title: props.meta.title,
    description: props.meta.description,
    keywords: props.meta.tags,
    openGraph: {
      title: props.meta.title,
      description: props.meta.description,
      url: siteConfig.url + '/branslar/' + props.slug,
      locale: props.meta.locale,
      type: 'article',
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const props = getSubject(params);

  return (
    <div className="prose">
      <h1 className={title()}>{props.meta.title}</h1>
      <main>
        <MDXRemote source={props.content} options={options}/>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'app/branslar/branslar'));

  return files.map(filename => ({
    slug: filename.replace('.mdx', ''),
  }));
}

function getSubject({ slug }: { slug : string }) {
  let markdownFile;
  try {
    markdownFile = fs.readFileSync(path.join(process.cwd(), `app/branslar/branslar/${slug}.mdx`), 'utf-8');
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