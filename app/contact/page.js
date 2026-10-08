import PageHead from "@/components/PageHead";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/data";

export const metadata = { title: "Contact", description: "Contact Antony Mwandiki for website development, software projects, collaborations, mentorship and attachments.", alternates: { canonical: "/contact" } };

export default function Contact() {
  return (
    <>
      <PageHead title="Contact" text="Business website, software project, collaboration or mentorship. I reply by email." />
      <div className="two">
        <ContactForm />
        <aside className="prose">
          <p><strong>Email</strong><br /><a className="go" href={`mailto:${site.email}`}>{site.email}</a></p>
          <p><strong>LinkedIn</strong><br /><a className="go" href={site.linkedin} rel="me noopener" target="_blank">antony-mwandiki</a></p>
          <p><strong>GitHub</strong><br /><a className="go" href={site.github} rel="me noopener" target="_blank">MwandikiAntony</a></p>
          <p><strong>Location</strong><br />Nairobi, Kenya</p>
        </aside>
      </div>
    </>
  );
}
