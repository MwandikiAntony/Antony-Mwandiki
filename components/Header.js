"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/data";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const active = (h) => (h === "/" ? path === "/" : path.startsWith(h));

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 1000 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="top">
      <div className="wrap">
        <nav aria-label="Main">
          <Link className="logo" href="/">Antony Mwandiki</Link>
          <button className="burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
          <div className="links" id="menu" data-open={open}>
            {nav.map(([h, l]) => (
              <Link key={h} href={h} aria-current={active(h) ? "page" : undefined}>{l}</Link>
            ))}
            <div className="menu-foot">
              <a className="btn o" href="/Antony-Mwandiki-CV.pdf" download>Download CV</a>
              <Link className="btn" href="/contact">Hire me</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}