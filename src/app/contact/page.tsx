import { site } from "@/content/site";

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      </header>

      <div className="rounded-2xl border border-zinc-200 p-5">
        <ul className="space-y-3 text-zinc-700">

          {/* Email */}
          <li>
            <span className="font-medium">Email:</span>{" "}
            <a
              className="underline hover:no-underline"
              href={`mailto:${site.links.email}`}
            >
              {site.links.email}
            </a>
          </li>

          {/* LinkedIn */}
          {site.links.linkedin && (
            <li>
              <span className="font-medium">LinkedIn:</span>{" "}
              <a
                className="underline hover:no-underline"
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                View profile
              </a>
            </li>
          )}

          {/* Google Scholar (optional) */}
          {site.links.scholar && (
            <li>
              <span className="font-medium">Google Scholar:</span>{" "}
              <a
                className="underline hover:no-underline"
                href={site.links.scholar}
                target="_blank"
                rel="noreferrer"
              >
                View profile
              </a>
            </li>
          )}

        </ul>
      </div>
    </div>
  );
}
