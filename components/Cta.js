import Link from "next/link";
export default function Cta({ title = "Let us build something together", text = "Websites for your business, a product from scratch, or a collaboration. Tell me what you have in mind." }) {
  return (<section className="cta"><h2>{title}</h2><p>{text}</p><Link className="btn" href="/contact">Contact me</Link></section>);
}
