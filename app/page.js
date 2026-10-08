import Link from "next/link";
import Avatar from "@/components/Avatar";
import Cta from "@/components/Cta";
import ProjectCard from "@/components/ProjectCard";
import { projects, stats, skills, site } from "@/lib/data";
import { getPosts, fmtDate } from "@/lib/posts";

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  const posts = getPosts().slice(0, 3);
  return (
    <>
      <section className="hero">
        <div className="photo"><Avatar variant="portrait" /></div>
        <div>
          <p className="eyebrow">Full-Stack Engineer · Founder · Nairobi</p>
          <h1>Antony Mwandiki</h1>
          <p className="lead">Full-stack software engineer, website developer and entrepreneur. Founder of IsoMount Tech Collective, Sanctum and Innovant Technologies. I build secure, fast products for people and businesses.</p>
          <div className="row">
            <Link className="btn" href="/projects">View my work</Link>
            <Link className="btn o" href="/contact">Hire me</Link>
            <a className="btn o" href="/Antony-Mwandiki-CV.pdf" download>Download CV</a>
          </div>
          <div className="social">
            <a href={site.github} target="_blank" rel="me noopener">GitHub</a>
            <a href={site.linkedin} target="_blank" rel="me noopener">LinkedIn</a>
            <a href={`mailto:${site.email}`}>Email</a>
          </div>
        </div>
      </section>
      <div className="stats">{stats.map(([n, l]) => <div key={l}><b>{n}</b><span>{l}</span></div>)}</div>

      <section className="sec">
        <h2>What I do</h2>
        <p className="sub">Three ways I put software to work.</p>
        <div className="grid">
          <div className="card"><h3>Digital solutions for business</h3><p>Through Innovant Technologies, my company since 2024, I design and build websites, apps and digital solutions that help organizations grow.</p><Link className="go" href="/experience">See experience</Link></div>
          <div className="card"><h3>Full-stack products</h3><p>From banking and health platforms to a bursary system and a developer ecosystem, I build secure systems end to end.</p><Link className="go" href="/projects">See projects</Link></div>
          <div className="card"><h3>Web3 and emerging tech</h3><p>As a Hedera Certified Foundation holder and Momentum Labs intern, I explore ledgers, tokenization and smart contracts.</p><Link className="go" href="/about">Learn more</Link></div>
        </div>
      </section>

      <section className="sec">
        <h2>Featured work</h2>
        <div className="grid">{projects.filter((p) => p.featured).map((p) => <ProjectCard key={p.title} p={p} />)}</div>
      </section>

      <section className="sec">
        <h2>Skills and technologies</h2>
        <div className="grid">{skills.map(([k, v]) => (
          <div className="card sm" key={k}><h3>{k}</h3><p>{v}</p></div>
        ))}</div>
      </section>

      <section className="sec">
        <h2>From the blog</h2>
        <p className="sub">Stories about building, learning and leading.</p>
        <div className="grid">{posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card post"><span className="cat">{p.category}</span><h3>{p.title}</h3><p>{p.excerpt}</p><div className="meta">{fmtDate(p.date)} · {p.minutes} min read</div></Link>
        ))}</div>
      </section>
      <Cta />
    </>
  );
}