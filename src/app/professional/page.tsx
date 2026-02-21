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
        <p className="max-w-3xl text-zinc-700">{site.professional.earlier}</p>
      </section>
    </div>
  );
}
