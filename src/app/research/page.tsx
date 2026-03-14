import { site } from "@/content/site";

export default function ResearchPage() {
  const thesis = site.research.thesis;

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Research</h1>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Current focus</h2>
        <p className="max-w-3xl text-zinc-700">{site.research.currentFocus}</p>

        {thesis?.link ? (
          <ul className="list-disc space-y-2 pl-5 text-zinc-700">
            <li>
              <a
                className="underline hover:no-underline"
                href={thesis.link}
                target="_blank"
                rel="noreferrer"
              >
                <span className="font-medium">{thesis.title}</span>
              </a>
              <span className="text-zinc-500"> — {thesis.venue}</span>
            </li>
          </ul>
        ) : null}
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Emerging direction</h2>
        <p className="max-w-3xl text-zinc-700">{site.research.emergingDirection}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Peer-reviewed publications</h2>
        <ul className="list-disc space-y-2 pl-5 text-zinc-700">
        {site.research["peer-reviewedpublications"].map((p) => (
  <li key={p.title}>
    <a
      className="underline hover:no-underline font-medium"
      href={p.link}
      target="_blank"
      rel="noreferrer"
    >
      {p.title}
    </a>
    {", "}<em>{p.venue}</em>{p.year ? `, ${p.year}` : ""}
  </li>
))}
        </ul>
      </section>
      
       <section className="space-y-3">
          <h2 className="text-xl font-semibold">Selected awards</h2>
          <ul className="mt-4 space-y-3 text-sm text-zinc-700">
  {site.research.awards.map((a) => (
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
    </div>
  );
}
