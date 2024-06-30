import { MetadataRoute } from 'next';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { parseISO, format } from 'date-fns';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const postFiles = fs.readdirSync(path.join(process.cwd(), 'app/blog/postlar/'), 'utf-8');

  const posts = postFiles.map(filename => {
    const slug = filename.replace('.mdx', '');
    const source = fs.readFileSync(path.join(process.cwd(), `app/blog/postlar/${slug}.mdx`), 'utf-8');
    let { data: frontMatter } = matter(source);

    const formattedDate = format(frontMatter.date, 'PP');

    frontMatter.date = formattedDate;

    return {
      meta: frontMatter,
      slug: slug,
    };
  });

  const postsLength = posts.length;

  const bransFiles = fs.readdirSync(path.join(process.cwd(), 'app/branslar/branslar/'), 'utf-8');

  const branslar = bransFiles.map(filename => {
    const slug = filename.replace('.mdx', '');
    const source = fs.readFileSync(path.join(process.cwd(), `app/branslar/branslar/${slug}.mdx`), 'utf-8');
    let { data: frontMatter } = matter(source);

    return {
      meta: frontMatter,
      slug: slug,
    };
  });

  let siteMap = [];

  posts.forEach((post) => {
    siteMap.push({
      url: `${siteConfig.url}posts/${post.slug}`,
      lastModified: new Date(String(post.meta.date)),
      changeFrequency: 'monthly',
      priority: 0.75,
    });
  });

  branslar.forEach((post) => {
    siteMap.push({
      url: `${siteConfig.url}branslar/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.72,
    });
  });

  siteMap.push({
    url: siteConfig.url,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  });

  siteMap.push({
    url: siteConfig.url + 'yurt-disi-egitim',
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.78,
  });

  siteMap.push({
    url: siteConfig.url + 'hakkimizda',
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.78,
  });

  siteMap.push({
    url: siteConfig.url + 'etkinlikler',
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.78,
  });

  siteMap.push({
    url: siteConfig.url + 'topluluk',
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.78,
  });

  siteMap.push({
    url: siteConfig.url + 'branslar',
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  });

  for (let i = 1; i <= Math.ceil(postsLength / 4); i++) {
    siteMap.push({
      url: `${siteConfig.url}blog/sayfa/${i}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })
  }

  return siteMap;
}