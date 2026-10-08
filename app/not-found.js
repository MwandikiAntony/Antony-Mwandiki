import Link from "next/link";
import PageHead from "@/components/PageHead";
export const metadata = { title: "Page not found" };
export default function NotFound() {
  return (<><PageHead title="Page not found" text="That page does not exist. Try the home page or the blog." /><Link className="btn" href="/">Back home</Link></>);
}
