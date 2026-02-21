import Link from "next/link";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600 shadow-sm">
          Academic / PhD-focused • curated writing • hybrid professional
        </p>

        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          {site.name}
        </h1>

        <p className="text-pretty text-lg text-zinc-700 md:text-xl">
          {site.tagline}
        </p>

        <div className="max-w-3xl space-y-4 text-zinc-700">
          {site.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/research"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800"
          >
            Research
          </Link>
          <Link
            href="/writing"
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
          >
            Selected Writing
          </Link>
          <Link
            href="/cv"
            className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
          >
            CV
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card title="Research" desc="Projects, thesis, and current questions." href="/research" />
        <Card title="Teaching" desc="Courses, approach, and selected materials." href="/teaching" />
        <Card title="Professional" desc="Komoot editorial leadership + systems work." href="/professional" />
      </section>
    </div>
  );
}

function Card({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="text-zinc-400 group-hover:text-zinc-700">→</span>
      </div>
      <p className="mt-2 text-sm text-zinc-600">{desc}</p>
    </Link>
  );
}
