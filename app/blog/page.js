import Link from "next/link";
import PageHead from "@/components/PageHead";
import { getPosts, fmtDate } from "@/lib/posts";

export const metadata = { title: "Blog", description: "Writing by Antony Mwandiki on entrepreneurship, software engineering, Web3, faith, teaching and building in Africa.", alternates: { canonical: "/blog" } };

export default function Blog() {
  const [first, ...rest] = getPosts();
  return (
    <>
      <PageHead title="Blog" text="Notes on entrepreneurship, engineering, learning and life." />
      <Link href={`/blog/${first.slug}`} className="feature">
        <div className="pic">{first.category}</div>
        <div className="txt"><div className="meta">{fmtDate(first.date)} · {first.minutes} min read</div><h2>{first.title}</h2><p>{first.excerpt}</p><span className="go">Read the story</span></div>
      </Link>
      <div className="grid">{rest.map((p) => (
        <Link key={p.slug} href={`/blog/${p.slug}`} className="card post"><span className="cat">{p.category}</span><h3>{p.title}</h3><p>{p.excerpt}</p><div className="meta">{fmtDate(p.date)} · {p.minutes} min read</div></Link>
      ))}</div>
    </>
  );
}
