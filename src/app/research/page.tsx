import { site } from "@/content/site";

export default function ResearchPage() {
  const thesis = site.research.thesis;

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

        {thesis?.link ? (
          <ul className="list-disc space-y-2 pl-5 text-zinc-700">
            <li>
              <a
                href={thesis.link}
                target="_blank"
                rel="noreferrer"
                className="underline hover:no-underline"
              >
                <span className="font-medium">{thesis.title}</span>
              </a>{" "}
              <span className="text-zinc-600">
                — <em>{thesis.venue}</em>
              </span>
            </li>
          </ul>
        ) : null}
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Emerging direction</h2>
        <p className="max-w-3xl text-zinc-700">{site.research.emergingDirection}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Publications</h2>
        <ul className="list-disc space-y-2 pl-5 text-zinc-700">
          {site.research.publications.map((p, i) => (
            <li key={`${p.title}-${i}`}>
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:no-underline"
                >
                  <span className="font-medium">{p.title}</span>
                </a>
              ) : (
                <span className="font-medium">{p.title}</span>
              )}
              {", "}
              <em>{p.venue}</em>
              {p.note ? <span className="text-zinc-500"> — {p.note}</span> : null}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
