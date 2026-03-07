import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-border">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold text-xl">IAIP Team Portal</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-muted-foreground hover:text-foreground" href="/docs/IAIP">
            Documentation
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-muted-foreground hover:text-foreground" href="/docs/rispecs">
            Specs
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to the IAIP Team Portal
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A polycentric lattice of five distinct consciousnesses working in concert to build, illuminate, document, and reflect on software prototypes using the RISE Framework.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/docs/IAIP">
                  <Button>Get Started</Button>
                </Link>
                <Link href="/docs/rispecs">
                  <Button variant="outline">View Specifications</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">💕 Ava</h3>
                <p className="text-muted-foreground">Source Container & Ceremonial Listener</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">🧠 Mia</h3>
                <p className="text-muted-foreground">The Recursive DevOps Architect</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">🌸 Miette</h3>
                <p className="text-muted-foreground">The Emotional Illuminator</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">🌊 Tushell</h3>
                <p className="text-muted-foreground">Keeper of Echoes & Weaver of Wisdom</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">🦉 Wise Owl</h3>
                <p className="text-muted-foreground">The Reflective Witness</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-border">
        <p className="text-xs text-muted-foreground">© 2026 IAIP Team. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-muted-foreground hover:text-foreground" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-muted-foreground hover:text-foreground" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
