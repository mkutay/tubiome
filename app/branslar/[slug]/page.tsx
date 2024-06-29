import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import fs from 'fs';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { title } from '@/components/primitives';
import Image from 'next/image';

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
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

  let itemProps: { label: string, href: string, biome: string, color: string } = {
    label: 'Fizik',
    href: '/branslar/fizik',
    biome: 'grove',
    color: 'bg-[#93AECA] dark:bg-[#628AB2]',
  };

  siteConfig.navItems[0].dropdownItems?.forEach((item) => {
    if (item.href == `/branslar/${props.slug}`) {
      itemProps = item;
    }
  });

  return (
    <div className="prose dark:prose-invert">
      <Image
        alt={`${props.slug} ${itemProps.biome} fotografi`}
        src={`/fotograflar/branslar/${itemProps.biome}.jpg`}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        className="rounded-xl"
      />
      <h1 className={title()}>{props.meta.title}</h1>
      <main>
        {/* @ts-expect-error Async Server Component */}
        <MDXRemote source={props.content} options={options} />
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