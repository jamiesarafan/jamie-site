import { site } from "@/content/site";

export default function CVPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">CV</h1>
        <p className="max-w-3xl text-zinc-700">
          Add a PDF when ready. You can also keep a brief web summary here.
        </p>
      </header>

      <div className="rounded-2xl border border-zinc-200 p-5">
        <p className="text-zinc-700">
          PDF link placeholder: <span className="text-zinc-500">{site.links.cvPdfPath}</span>
        </p>
        <p className="mt-2 text-sm text-zinc-500">
          When you have it, add a file named <code className="rounded bg-zinc-100 px-1 py-0.5">cv.pdf</code> inside
          the <code className="rounded bg-zinc-100 px-1 py-0.5">public</code> folder and it will be available at
          <code className="rounded bg-zinc-100 px-1 py-0.5">/cv.pdf</code>.
        </p>
      </div>
    </div>
  );
}
