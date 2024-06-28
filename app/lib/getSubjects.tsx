import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export default function getSubjects() { // half-open interval, ie. [startInd, endInd)
  const subjectFiles = fs.readdirSync(path.join(process.cwd(), 'app/branslar/branslar/'), 'utf-8');

  const posts = subjectFiles.map(filename => {
    const slug = filename.replace('.mdx', '');
    const source = fs.readFileSync(path.join(process.cwd(), `app/branslar/branslar/${slug}.mdx`), 'utf-8');
    let { data: frontMatter } = matter(source);

    return {
      meta: frontMatter,
      slug: slug,
    };
  });

  return posts;
}