import type { Metadata } from "next";

export const metadata: Metadata = { title: "O nás" };

export default function AboutPage() {
  return <>
    <section className="page-head"><div className="container" data-reveal="up"><span className="eyebrow">O nás</span><h1>MS-rent</h1><p className="lead">Jednoduchá půjčovna stavební techniky v Děčíně a okolí.</p></div></section>
    <section className="section white">
      <div className="container about-grid">
        <div className="text-page" data-reveal="left"><h2>Technika pro běžné stavební práce</h2><p>Nabízíme stroje na výkopy, převoz materiálu a hutnění. Půjčovna je určená jak pro soukromé osoby, tak pro řemeslníky a firmy.</p><p>Chceme, aby byl pronájem jednoduchý: vyberete stroj, ozvete se nám a společně domluvíme další postup.</p></div>
        <div className="about-points" data-reveal="right">
          <article><b>01</b><div><h3>Jednoduchá domluva</h3><p>Bez složitého objednávání. Stačí napsat nebo zavolat.</p></div></article>
          <article><b>02</b><div><h3>Praktické stroje</h3><p>Technika pro běžné práce kolem stavby, domu a zahrady.</p></div></article>
          <article><b>03</b><div><h3>Děčín a okolí</h3><p>Lokální půjčovna s možností individuální domluvy.</p></div></article>
        </div>
      </div>
    </section>
  </>;
}
