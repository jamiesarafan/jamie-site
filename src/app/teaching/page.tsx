import { site } from "@/content/site";

export default function TeachingPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Teaching</h1>
        <p className="max-w-3xl text-zinc-700">
          Courses taught, teaching approach, and selected materials.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Approach</h2>
        <p className="max-w-3xl text-zinc-700">{site.teaching.approach}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Selected courses</h2>
        <ul className="list-disc space-y-2 pl-5 text-zinc-700">
          {site.teaching.courses.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      {site.teaching.quotes.length ? (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Selected comments</h2>
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
