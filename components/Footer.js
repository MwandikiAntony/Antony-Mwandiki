import Link from "next/link";
import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <span>&copy; {new Date().getFullYear()} {site.name}. Nairobi, Kenya.</span>
        <div>
          <Link href="/blog">Blog</Link>
          <a href={site.github} rel="me noopener" target="_blank">GitHub</a>
          <a href={site.linkedin} rel="me noopener" target="_blank">LinkedIn</a>
          <a href={`mailto:${site.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}