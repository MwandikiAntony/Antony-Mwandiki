import PageHead from "@/components/PageHead";
import Cta from "@/components/Cta";
import ProjectCard from "@/components/ProjectCard";
import { projects, site } from "@/lib/data";

export const metadata = { title: "Projects", description: "Projects by Antony Mwandiki: Sanctum, IsoMount Tech Collective, StockSense, the Igembe South Digital Bursary System, Capital Bank of Kenya, Afya Diary Kenya and PesaFlow.", alternates: { canonical: "/projects" } };

export default function Projects() {
  return (
    <>
      <PageHead title="Projects" text="Products I have designed, built and launched." />
      <div className="grid">{projects.map((p) => <ProjectCard key={p.title} p={p} />)}</div>
      <p style={{ marginTop: 32 }}>More code on <a className="go" href={site.github} rel="me noopener" target="_blank">GitHub</a>.</p>
      <Cta />
    </>
  );
}
