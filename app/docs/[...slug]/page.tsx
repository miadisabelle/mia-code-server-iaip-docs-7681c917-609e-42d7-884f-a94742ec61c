import { getDocBySlug, getAllDocs } from '@/lib/docs';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const docs = getAllDocs();
  return docs.map((doc) => ({
    slug: doc.split('/'),
  }));
}

export default async function DocPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container py-6 md:py-12 px-4 md:px-6">
        <article className="prose prose-gray max-w-none dark:prose-invert">
          <h1>{doc.title}</h1>
          <ReactMarkdown>{doc.content}</ReactMarkdown>
        </article>
      </main>
    </div>
  );
}
