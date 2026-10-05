import Link from "next/link";

export default function NotFound() {
  return <section className="section"><div className="container text-page"><h1>Stránka nenalezena</h1><p>Tahle stránka neexistuje.</p><Link className="button primary" href="/">Zpět domů</Link></div></section>;
}
