import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/data";
import BackToTop from "@/components/BackToTop";

export const viewport = { themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f3f5f8" }, { media: "(prefers-color-scheme: dark)", color: "#0b131b" }] };
export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.title}`, template: `%s | ${site.name}` },
  description: site.description,
  keywords: ["Antony Mwandiki", "full-stack developer Kenya", "web developer Nairobi", "IsoMount Tech Collective", "Sanctum", "Innovant Technologies", "Next.js developer", "MERN developer", "Hedera developer"],
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: site.name, title: `${site.name} | ${site.title}`, description: site.description, url: site.url, images: ["/images/og.png"] },
  twitter: { card: "summary_large_image", title: `${site.name} | ${site.title}`, description: site.description, images: ["/images/og.png"] },
  robots: { index: true, follow: true },
  verification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION } : undefined,
};

const person = {
  "@context": "https://schema.org", "@type": "Person", name: site.name, url: site.url,
  image: `${site.url}/images/antony.png`, email: `mailto:${site.email}`,
  jobTitle: "Full-Stack Software Engineer and Founder",
  address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
  alumniOf: [{ "@type": "CollegeOrUniversity", name: "Multimedia University of Kenya" }, { "@type": "EducationalOrganization", name: "Power Learn Project Academy" }],
  worksFor: [{ "@type": "Organization", name: "Innovant Technologies" }, { "@type": "Organization", name: "IsoMount Tech Collective" }, { "@type": "Organization", name: "Sanctum" }],
  knowsAbout: ["Full-stack development", "Web development", "Next.js", "React", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Hedera Hashgraph", "Entrepreneurship"],
  sameAs: [site.linkedin, site.github, "https://isomount-tech-collective.vercel.app/"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main"><div className="wrap">{children}</div></main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
