import { site } from "@/content/site";

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      </header>
      <div className="rounded-2xl border border-zinc-200 p-5">
        <ul className="space-y-2 text-zinc-700">
          <li>
            <a className="underline hover:no-underline" href={`mailto:${site.links.email}`}>
              {site.links.email}
            </a>
          </li>
          <li>
            <a className="underline hover:no-underline" href={site.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="underline hover:no-underline" href={site.links.scholar} target="_blank" rel="noreferrer">
              Google Scholar
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
