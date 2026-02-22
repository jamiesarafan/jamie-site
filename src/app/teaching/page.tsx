import { site } from "@/content/site";

export default function TeachingPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Teaching</h1>
      </header>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Approach</h2>
        <p className="max-w-3xl text-zinc-700">{site.teaching.approach}</p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Selected courses</h2>
        <ul className="mt-4 space-y-3 text-sm text-zinc-700">
          {site.teaching.courses.map((c) => (
            <li key={`${c.title}-${c.organization}`}>
              <div className="font-medium">{c.title}</div>
              <div className="text-zinc-600">
                {c.organization} • {c.location}
              </div>
              <div className="text-xs text-zinc-500">{c.dates}</div>
            </li>
          ))}
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Selected awards</h2>
        <ul className="mt-4 space-y-3 text-sm text-zinc-700">
          {site.teaching.awards.map((a) => (
            <li key={`${a.title}-${a.organization}`}>
              <div className="font-medium">{a.title}</div>
              <div className="text-zinc-600">
                {a.organization} • {a.location}
              </div>
              <div className="text-xs text-zinc-500">{a.dates}</div>
            </li>
          ))}
        </ul>
      </section>
      {site.teaching.quotes.length ? (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Selected student feedback</h2>
          <ul className="space-y-2 text-zinc-700">
            {site.teaching.quotes.map((q) => (
              <li key={q} className="rounded-xl border border-zinc-200 p-4 text-sm">
                {q}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
