import Link from "next/link";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img
            src="/IMG_1994_circle.png"
            alt="Jamie Sarafan"
            className="w-56 h-56 rounded-full object-cover shrink-0 mt-25"
          />
          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              {site.name}
            </h1>
            <p className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600 shadow-sm">
              University of Colorado Boulder
            </p>
            <p className="text-pretty text-lg text-zinc-700 md:text-xl">
              {site.tagline}
            </p>
            <div className="max-w-3xl space-y-4 text-zinc-700">
              {site.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        <Card title="Research" desc="Publications, thesis, and current questions." href="/research" />
        <Card title="Teaching" desc="Courses, approach, and selected materials." href="/teaching" />
        <Card title="Professional" desc="Komoot editorial leadership + workflows." href="/professional" />
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
