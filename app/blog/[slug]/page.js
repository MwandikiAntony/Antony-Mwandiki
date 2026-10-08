import Link from "next/link";
import { notFound } from "next/navigation";
import Cta from "@/components/Cta";
import { getPosts, getPost, fmtDate } from "@/lib/posts";
import { site } from "@/lib/data";

export const dynamicParams = false;
export const generateStaticParams = () => getPosts().map((p) => ({ slug: p.slug }));

export function generateMetadata({ params }) {
  const p = getPost(params.slug);
  if (!p) return {};
  return {
    title: p.title, description: p.excerpt, keywords: p.tags, alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: "article", title: p.title, description: p.excerpt, url: `/blog/${p.slug}`, publishedTime: p.date, authors: [site.name], tags: p.tags },
  };
}

export default function Post({ params }) {
  const p = getPost(params.slug);
  if (!p) notFound();
  const related = getPosts().filter((x) => x.slug !== p.slug).slice(0, 2);
  const ld = { "@context": "https://schema.org", "@type": "BlogPosting", headline: p.title, description: p.excerpt, datePublished: p.date, author: { "@type": "Person", name: site.name, url: site.url }, mainEntityOfPage: `${site.url}/blog/${p.slug}`, keywords: p.tags.join(", ") };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <article className="full">
        <Link className="go" href="/blog">Back to blog</Link>
        <div className="meta" style={{ marginTop: 28 }}>{p.category} · {fmtDate(p.date)} · {p.minutes} min read</div>
        <h1>{p.title}</h1>
        <div className="tags" style={{ marginBottom: 32 }}>{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
        <div className="body" dangerouslySetInnerHTML={{ __html: p.html }} />
      </article>
      <section className="sec"><h2>Keep reading</h2><div className="grid">{related.map((r) => (
        <Link key={r.slug} href={`/blog/${r.slug}`} className="card post"><span className="cat">{r.category}</span><h3>{r.title}</h3><p>{r.excerpt}</p></Link>
      ))}</div></section>
      <Cta />
    </>
  );
}
