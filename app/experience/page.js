import PageHead from "@/components/PageHead";
import Cta from "@/components/Cta";
import { experience } from "@/lib/data";

export const metadata = { title: "Experience", description: "Work and leadership experience of Antony Mwandiki: Momentum Labs intern, founder of Sanctum, Innovant Technologies and IsoMount Tech Collective, and former teacher.", alternates: { canonical: "/experience" } };

export default function Experience() {
  return (
    <>
      <PageHead title="Experience" text="Internship, ventures I founded, and my years in the classroom." />
      <div className="tl">{experience.map((e) => (
        <article key={e.org}><h3>{e.role}, {e.org}</h3><div className="meta">{e.when} · {e.where}</div><ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul></article>
      ))}</div>
      <Cta />
    </>
  );
}
