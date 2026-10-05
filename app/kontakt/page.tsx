import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Kontakt" };

export default function ContactPage({ searchParams }: { searchParams?: { stroj?: string } }) {
  return (
    <>
      <section className="page-head">
        <div className="container" data-reveal="up">
          <span className="eyebrow">Kontakt</span>
          <h1>Poptávka stroje</h1>
          <p className="lead">Napište nám, co potřebujete půjčit a na jakou práci.</p>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info" data-reveal="left">
              <h2>MS-rent</h2>
              <p><b>Lokalita:</b><br />{site.area}</p>
              <p><b>Telefon:</b><br /><a href={`tel:${site.phoneHref}`}>{site.phone}</a></p>
              <p><b>E-mail:</b><br /><a href={`mailto:${site.email}`}>{site.email}</a></p>
            </div>

            <ContactForm defaultMachine={searchParams?.stroj || ""} />
          </div>

          <div className="contact-map" data-reveal="up">
            <div className="contact-map-heading">
              <span className="eyebrow">Kde nás najdete</span>
              <h2>MS ProfiTech s.r.o.</h2>
              <p>Provozovna v Děčíně. Před vyzvednutím stroje doporučujeme termín předem domluvit.</p>
            </div>

            <div className="map-frame-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.6292535068133!2d14.19208107594151!3d50.7453648660863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47099f96234a2cbb%3A0xaf92e2de792436d1!2sMS%20ProfiTech%20s.r.o.!5e0!3m2!1scs!2scz!4v1791211904902!5m2!1scs!2scz"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="MS ProfiTech s.r.o. na mapě"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
