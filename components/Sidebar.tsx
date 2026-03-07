import Link from 'next/link';
import { getAllDocs } from '@/lib/docs';

export function Sidebar() {
  const docs = getAllDocs();

  return (
    <aside className="w-64 border-r border-border bg-sidebar hidden lg:block min-h-screen">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b border-border px-6">
          <Link className="flex items-center gap-2 font-semibold text-sidebar-foreground" href="/">
            <span>IAIP Docs</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            {docs.map((doc) => (
              <Link
                key={doc}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground/70 transition-all hover:text-sidebar-foreground hover:bg-sidebar-accent"
                href={`/docs/${doc}`}
              >
                {doc}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
