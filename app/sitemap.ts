import type { MetadataRoute } from "next";
import { machines } from "@/lib/machines";
import { seo } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: seo.url, changeFrequency: "weekly", priority: 1 },
    { url: `${seo.url}/stroje`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${seo.url}/o-nas`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${seo.url}/faq`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${seo.url}/kontakt`, changeFrequency: "monthly", priority: 0.8 }
  ];

  const machinePages: MetadataRoute.Sitemap = machines.map((machine) => ({
    url: `${seo.url}/stroje/${machine.slug}`,
    changeFrequency: "weekly",
    priority: 0.8
  }));

  return [...staticPages, ...machinePages];
}
