import { site } from "@/lib/site";

export const seo = {
  siteName: site.name,
  legalName: site.company,
  url: site.url,
  locale: "cs_CZ",
  city: site.city,
  region: "Ústecký kraj",
  country: "CZ",
  description:
    "Půjčovna stavebních strojů v Děčíně a okolí. Pronájem pásového minibagru, pásového dumperu, vibrační desky a vibračního pěchu.",
  keywords: [
    "půjčovna stavebních strojů Děčín",
    "pronájem minibagru Děčín",
    "pronájem dumperu Děčín",
    "vibrační deska Děčín",
    "vibrační pěch Děčín",
    "půjčovna stavební techniky",
    "MS-rent",
    "MS ProfiTech"
  ]
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, seo.url).toString();
}
