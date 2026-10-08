import { site, nav } from "@/lib/data";
import { getPosts } from "@/lib/posts";

export default function sitemap() {
  const pages = nav.map(([h]) => ({ url: site.url + (h === "/" ? "" : h), lastModified: new Date(), changeFrequency: "monthly", priority: h === "/" ? 1 : 0.8 }));
  const posts = getPosts().map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: new Date(p.date), changeFrequency: "yearly", priority: 0.7 }));
  return [...pages, ...posts];
}
