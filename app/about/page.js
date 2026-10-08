import PageHead from "@/components/PageHead";
import Cta from "@/components/Cta";
import Avatar from "@/components/Avatar";
import { skills, education } from "@/lib/data";

export const metadata = { title: "About", description: "About Antony Mwandiki: full-stack engineer, entrepreneur, fourth-year Applied Physics and Computer Science student, and founder of IsoMount Tech Collective, Sanctum and Innovant Technologies.", alternates: { canonical: "/about" } };

export default function About() {
  return (
    <>
      <PageHead title="About me" text="Engineer, founder and former teacher, building from Nairobi for Africa and beyond." />
      <div className="two">
        <div className="prose">
          <p>I am Antony Mwandiki, a full-stack software engineer and entrepreneur based in Nairobi, Kenya. I am in my fourth year of a Bachelor of Science in Applied Physics and Computer Science at Multimedia University of Kenya.</p>
          <p>I specialise in backend architecture, database design and secure applications: JWT and OAuth authentication, role-based access control and well-structured REST APIs. My work spans banking, health, fintech, public-sector funding, developer community and faith.</p>
          <p>I am the founder of <strong>IsoMount Tech Collective</strong>, a platform that connects African developers with opportunities, mentorship and community. I am also the founder of <strong>Innovant Technologies</strong>, a technology company started in 2024 that delivers innovative digital solutions for modern businesses, and of <strong>Sanctum</strong>, a global Catholic social network founded on 12 March 2026.</p>
          <p>In 2026 I completed the Entrepreneurship Bootcamp by Professors Without Borders. I am currently an intern at Momentum Labs, where I am learning Web3 and Hedera Hashgraph and building StockSense, an AI-powered inventory management solution for Cloudora.</p>
          <p>Before software I taught Mathematics and Physics in Meru County. Teaching shaped how I communicate, mentor and plan. I am driven by a simple belief: technology should solve real problems for real people, and talent should never be invisible because of where it comes from.</p>
        </div>
        <aside><Avatar /><dl className="sk">{skills.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></aside>
      </div>

      <section className="sec">
        <h2>Education and training</h2>
        <div className="grid">{education.map((e) => (
          <div className="card" key={e[1]}><h3>{e[1]}</h3><div className="meta">{e[0]} · {e[2]}</div><p style={{ margin: 0 }}>{e[3]}</p></div>
        ))}</div>
      </section>
      <Cta />
    </>
  );
}
