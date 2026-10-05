import type { Metadata } from "next";
import FaqList from "@/components/FaqList";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return <>
    <section className="page-head"><div className="container" data-reveal="up"><span className="eyebrow">FAQ</span><h1>Časté otázky</h1><p className="lead">Základní informace k pronájmu strojů.</p></div></section>
    <section className="section white"><div className="container narrow" data-reveal="up"><FaqList /></div></section>
  </>;
}
