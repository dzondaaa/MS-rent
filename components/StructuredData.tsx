import { machines } from "@/lib/machines";
import { site } from "@/lib/site";
import { seo } from "@/lib/seo";

export default function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${seo.url}/#business`,
    name: site.name,
    legalName: site.company,
    url: seo.url,
    description: seo.description,
    email: site.email,
    ...(site.phone ? { telephone: site.phone } : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: seo.city,
      addressRegion: seo.region,
      addressCountry: seo.country
    },
    areaServed: site.area,
    makesOffer: machines.map((machine) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: machine.name,
        description: machine.short
      }
    }))
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${seo.url}/#website`,
    url: seo.url,
    name: site.name,
    inLanguage: "cs-CZ",
    publisher: { "@id": `${seo.url}/#business` }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
