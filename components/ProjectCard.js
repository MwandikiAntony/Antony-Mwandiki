export default function ProjectCard({ p }) {
  return (
    <div className={`card${p.featured ? "" : ""}`}>
      <h3>{p.title}</h3>
      <div className="meta">{p.tag} · {p.year}</div>
      <p>{p.text}</p>
      <div className="tags">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
      {p.link && <a className="go" href={p.link} target="_blank" rel="noopener noreferrer">Visit project</a>}
    </div>
  );
}
