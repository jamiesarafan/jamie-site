import { site } from "@/content/site";

export default function ProfessionalPage() {
  const collections = site.professional.komootCollections ?? [];

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Professional</h1>
        <p className="max-w-3xl text-zinc-700">
          Editorial leadership and systems work (kept legible to academic audiences).
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">komoot</h2>
        <p className="max-w-3xl text-zinc-700">{site.professional.komoot}</p>

        {collections.length ? (
          <div className="pt-2">
            <h3 className="text-sm font-semibold text-zinc-900">Selected Collections</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-zinc-700">
              {collections.map((c) => (
                <li key={c.link}>
                  <a className="underline hover:no-underline" href={c.link} target="_blank" rel="noreferrer">
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Earlier work</h2>
        <p className="max-w-3xl text-zinc-700">{site.professional.outdoorSummary}</p>

        <ul className="mt-4 space-y-3 text-sm text-zinc-700">
          {site.professional.roles.map((role) => (
            <li key={`${role.title}-${role.organization}`}>
              <div className="font-medium">{role.title}</div>
              <div className="text-zinc-600">
                {role.organization} • {role.location}
              </div>
              <div className="text-xs text-zinc-500">{role.dates}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
