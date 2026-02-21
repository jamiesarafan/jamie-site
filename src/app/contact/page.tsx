import { site } from "@/content/site";

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="max-w-3xl text-zinc-700">The low-drama basics.</p>
      </header>

      <div className="rounded-2xl border border-zinc-200 p-5">
        <ul className="space-y-2 text-zinc-700">
          <li>
            Email:{" "}
            <a className="underline hover:no-underline" href={`mailto:${site.links.email}`}>
              {site.links.email}
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            {site.links.linkedin ? (
              <a className="underline hover:no-underline" href={site.links.linkedin} target="_blank" rel="noreferrer">
                {site.links.linkedin}
              </a>
            ) : (
              <span className="text-zinc-500">[add link]</span>
            )}
          </li>
          <li>
            Google Scholar (optional):{" "}
            {site.links.scholar ? (
              <a className="underline hover:no-underline" href={site.links.scholar} target="_blank" rel="noreferrer">
                {site.links.scholar}
              </a>
            ) : (
              <span className="text-zinc-500">[add link]</span>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
