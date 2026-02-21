import { site } from "@/content/site";

export default function ProfessionalPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Professional</h1>
        <p className="max-w-3xl text-zinc-700">
          Editorial leadership and systems work (kept legible to academic audiences).
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Komoot</h2>
        <p className="max-w-3xl text-zinc-700">{site.professional.komoot}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Earlier work</h2>

        <p className="max-w-3xl text-zinc-700">
          {site.professional.outdoorSummary}
        </p>

        <ul className="mt-4 space-y-2 text-sm text-zinc-700">
          {site.professional.roles.map((role) => (
            <li key={`${role.title}-${role.organization}-${role.dates}`}>
              <div className="font-medium">{role.title}</div>
              <div className="text-zinc-600">
                {role.organization} • {role.location}
              </div>
              <div className="text-zinc-500 text-xs">{role.dates}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
