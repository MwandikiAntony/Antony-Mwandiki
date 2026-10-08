import PageHead from "@/components/PageHead";
import CertCard from "@/components/CertCard";
import Cta from "@/components/Cta";
import { certs } from "@/lib/data";

export const metadata = { title: "Licenses and Certifications", description: "Certifications earned by Antony Mwandiki: Entrepreneurship Bootcamp 2026, Hedera Certified Foundation, Full-Stack MERN, Python, AI Career Essentials and more.", alternates: { canonical: "/certifications" } };

export default function Certifications() {
  return (
    <>
      <PageHead title="Licenses and certifications" text="Hover over a certificate, or tap it on mobile, to see the details." />
      <div className="grid">{certs.map((c) => <CertCard key={c.title} c={c} />)}</div>
      <Cta />
    </>
  );
}
