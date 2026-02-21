import { site } from "@/content/site";

export default function ResearchPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Research</h1>
        <p className="max-w-3xl text-zinc-700">
          A concise overview of current work, dissertation direction, and related interests.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Current focus</h2>
        <p className="max-w-3xl text-zinc-700">{site.research.currentFocus}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Emerging direction</h2>
        <p className="max-w-3xl text-zinc-700">{site.research.emergingDirection}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Publications</h2>
        <ul className="list-disc space-y-2 pl-5 text-zinc-700">
          {site.research.publications.map((p) => (
            <li key={p.title}>
              <span className="font-medium">{p.title}</span>, <em>{p.venue}</em>
              {p.note ? <span className="text-zinc-500"> — {p.note}</span> : null}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
