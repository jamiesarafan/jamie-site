import { site } from "@/content/site";

export default function CVPage() {
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">CV</h1>
        
          href={site.links.cvPdfPath}
          download
          className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800"
        >
          Download PDF
        </a>
      </header>
      <div className="overflow-hidden rounded-2xl border border-zinc-200">
        <iframe
          src={site.links.cvPdfPath}
          className="h-[80vh] w-full"
          title="Curriculum Vitae"
        />
      </div>
    </div>
  );
}
