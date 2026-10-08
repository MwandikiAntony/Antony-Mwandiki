export default function PageHead({ title, text }) {
  return (<div className="pagehead"><h1>{title}</h1>{text && <p>{text}</p>}</div>);
}
