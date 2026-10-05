import type { MetadataRoute } from "next";
import { machines } from "@/lib/machines";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.ms-rent.cz";
  return [
    "",
    "/stroje",
    "/o-nas",
    "/faq",
    "/kontakt",
    ...machines.map(machine => `/stroje/${machine.slug}`),
  ].map(path => ({ url: `${base}${path}`, lastModified: new Date() }));
}
