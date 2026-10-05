import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MachineCard from "@/components/MachineCard";
import FaqList from "@/components/FaqList";
import { machines } from "@/lib/machines";
import { seo } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  description: seo.description
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy" data-reveal="left">
            <span className="eyebrow">Půjčovna stavebních strojů • Děčín</span>
            <h1>Technika, která vám usnadní práci.</h1>
            <p className="lead">
              Minibagr, dumper a hutnicí technika k pronájmu v Děčíně a okolí.
              Jednoduše si vyberete stroj a domluvíme podmínky zapůjčení.
            </p>
            <div className="buttons">
              <Link href="/stroje" className="button primary">Zobrazit stroje <span aria-hidden="true">→</span></Link>
              <Link href="/kontakt" className="button">Nezávazná poptávka</Link>
            </div>
            <div className="hero-points" aria-label="Výhody půjčovny">
              <div><b>01</b><span>Děčín a okolí</span></div>
              <div><b>02</b><span>Pro firmy i jednotlivce</span></div>
              <div><b>03</b><span>Rychlá domluva</span></div>
            </div>
          </div>

          <div className="hero-image" data-reveal="right">
            <Image src="/assets/minibagr.webp" alt="Pásový minibagr" fill priority sizes="(max-width: 800px) 100vw, 50vw" />
            <div className="hero-image-label">
              <small>K pronájmu</small>
              <strong>Pásový minibagr</strong>
              <Link href="/stroje/minibagr">Detail stroje →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <div className="section-heading" data-reveal="up">
            <div>
              <span className="eyebrow">Naše technika</span>
              <h2>Stroje k pronájmu</h2>
            </div>
            <p>U každého stroje najdete, na co se hodí a proč si ho půjčit.</p>
          </div>
          <div className="machine-grid">
            {machines.map((machine) => <MachineCard key={machine.slug} machine={machine} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container simple-grid">
          <div data-reveal="left">
            <span className="eyebrow">Jak to funguje</span>
            <h2>Pronájem bez zbytečných komplikací</h2>
            <p className="lead small">Stačí tři jednoduché kroky a můžete se pustit do práce.</p>
            <Link className="text-link" href="/kontakt">Přejít na poptávku →</Link>
          </div>
          <div className="steps" data-reveal="right">
            <div><b>1</b><span><strong>Vyberte stroj</strong><small>Podle práce, kterou potřebujete udělat.</small></span></div>
            <div><b>2</b><span><strong>Pošlete poptávku</strong><small>Napište termín a o jaký stroj máte zájem.</small></span></div>
            <div><b>3</b><span><strong>Domluvíme předání</strong><small>Potvrdíme dostupnost a podmínky pronájmu.</small></span></div>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container narrow" data-reveal="up">
          <div className="section-heading compact">
            <div><span className="eyebrow">FAQ</span><h2>Časté otázky</h2></div>
            <p>Nejdůležitější informace před zapůjčením stroje.</p>
          </div>
          <FaqList />
          <div className="center-link"><Link href="/faq">Zobrazit všechny informace →</Link></div>
        </div>
      </section>
    </>
  );
}
