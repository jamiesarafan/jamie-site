import { site } from "@/content/site";

function Item({
  title,
  venue,
  blurb,
  link,
}: {
  title: string;
  venue: string;
  blurb?: string;
  link?: string;
}) {
  const Title = (
    <div className="font-medium">
      {link ? (
        <a className="underline hover:no-underline" href={link} target="_blank" rel="noreferrer">
          {title}
        </a>
      ) : (
        title
      )}
    </div>
  );

  return (
    <li className="rounded-2xl border border-zinc-200 p-5">
      {Title}
      <div className="text-sm text-zinc-500">{venue}</div>
      {blurb ? <p className="mt-2 text-sm">{blurb}</p> : null}
    </li>
  );
}

export default function WritingPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Selected Writing</h1>
        <p className="max-w-3xl text-zinc-700">
          A curated list. Short blurbs are optional but nice.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Academic</h2>
        <ul className="space-y-3 text-zinc-700">
          {site.writing.academic.map((w) => (
            <Item key={w.title} {...w} />
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Public-facing</h2>
        <ul className="space-y-3 text-zinc-700">
          {site.writing.public.map((w) => (
            <Item key={w.title} {...w} />
          ))}
        </ul>
      </section>
    </div>
  );
}
