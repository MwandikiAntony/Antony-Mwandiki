import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const dir = path.join(process.cwd(), "content/posts");

function read(slug) {
  const raw = fs.readFileSync(path.join(dir, slug + ".md"), "utf8");
  const { data, content } = matter(raw);
  return {
    slug, title: data.title, date: String(data.date), excerpt: data.excerpt,
    category: data.category || "General", tags: data.tags || [],
    minutes: Math.max(1, Math.round(content.split(/\s+/).length / 200)), content,
  };
}

export function getPosts() {
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md"))
    .map((f) => read(f.replace(/\.md$/, ""))).sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug) {
  try { const p = read(slug); return { ...p, html: marked.parse(p.content) }; } catch { return null; }
}

export const fmtDate = (d) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
