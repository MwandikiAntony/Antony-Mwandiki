"use client";
import { useState } from "react";

export default function CertCard({ c }) {
  const [bad, setBad] = useState(false);
  return (
    <div className="cert" tabIndex={0} aria-label={`${c.title}, ${c.org}`}>
      {!bad && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`/images/certificates/${c.img}`} alt={`${c.title} certificate from ${c.org}`} loading="lazy" onError={() => setBad(true)} />
      )}
      {bad && <div className="ph">{c.title}</div>}
      <span className="badge">{c.date}</span>
      <div className="info">
        <h3>{c.title}</h3>
        <p>{c.org}</p>
        <p>{c.note}</p>
        {c.link && <a href={c.link} target="_blank" rel="noopener noreferrer">Verify credential</a>}
      </div>
    </div>
  );
}
