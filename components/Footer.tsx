import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <strong className="footer-title">MS-rent</strong>
          <p>Půjčovna stavebních strojů<br />Děčín a okolí</p>
        </div>

        <div className="footer-made">
          <span>WEB VYTVOŘIL</span>
          <a href={site.dzondaUrl} target="_blank" rel="noreferrer" aria-label="DzondaDesign.cz">
            <Image src="/assets/dzondadesign-light.webp" alt="DzondaDesign.cz" width={235} height={39} />
          </a>
        </div>

        <div className="footer-links">
          <Link href="/stroje">Stroje</Link>
          <Link href="/o-nas">O nás</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} MS-rent</span>
          <span>Děčín a okolí</span>
        </div>
      </div>
    </footer>
  );
}
