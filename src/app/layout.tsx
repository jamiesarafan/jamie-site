import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { site } from "@/content/site";
import MobileNav from "@/app/MobileNav";
import { Analytics } from '@vercel/analytics/react';
export const metadata: Metadata = {
  title: site.name,
  description: site.tagline,
};

const nav = [
  { href: "/research", label: "Research" },
  { href: "/teaching", label: "Teaching" },
  { href: "/professional", label: "Professional" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:shadow"
        >
          Skip to content
        </a>

        <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
            <Link href="/" className="group">
              <div className="text-sm font-semibold tracking-wide">{site.name}</div>
              <div className="text-xs text-zinc-500 group-hover:text-zinc-700">
                Historian • Writer • Educator
              </div>
            </Link>

            <nav className="hidden gap-5 md:flex">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-600 hover:text-zinc-900"
                >
                  {item.label}
                </Link>
              ))}
           </nav>
          <MobileNav />
          </div>
        </header>
        <main id="content" className="mx-auto max-w-5xl px-5 py-10">
          {children}
        </main>

        <footer className="border-t border-zinc-200/70">
          <div className="mx-auto max-w-5xl px-5 py-8 text-sm text-zinc-500">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                © {new Date().getFullYear()} {site.name}
              </div>
              <div className="flex gap-4">
                <a className="hover:text-zinc-800" href={`mailto:${site.links.email}`}>
                  Email
                </a>
                <a className="hover:text-zinc-800" href={site.links.cvPdfPath}>
                  CV (PDF)
                </a>
              </div>
            </div>
          </div>
        </footer>
          <Analytics /> 
      </body>
    </html>
  );
}
