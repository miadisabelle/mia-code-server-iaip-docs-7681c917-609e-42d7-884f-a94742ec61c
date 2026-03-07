import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const docsDirectory = path.join(process.cwd());

export interface Doc {
  slug: string[];
  title: string;
  content: string;
  data: { [key: string]: any };
}

export function getDocBySlug(slug: string[]): Doc | null {
  const realSlug = slug.join('/');
  const fullPath = path.join(docsDirectory, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    // Try checking if it's a directory with README.md or index.md
    const indexPath = path.join(docsDirectory, realSlug, 'README.md');
    if (fs.existsSync(indexPath)) {
       const fileContents = fs.readFileSync(indexPath, 'utf8');
       const { data, content } = matter(fileContents);
       return { slug, title: data.title || slug[slug.length - 1], content, data };
    }
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug[slug.length - 1],
    content,
    data,
  };
}

export function getAllDocs(dir: string = docsDirectory, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        getAllDocs(filePath, fileList);
      }
    } else {
      if (file.endsWith('.md')) {
        const relativePath = path.relative(docsDirectory, filePath);
        fileList.push(relativePath.replace(/\.md$/, ''));
      }
    }
  });

  return fileList;
}
