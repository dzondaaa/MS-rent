import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MS-rent | Půjčovna stavebních strojů",
    short_name: "MS-rent",
    description: "Půjčovna stavebních strojů v Děčíně a okolí.",
    start_url: "/",
    display: "standalone",
    background_color: "#151515",
    theme_color: "#e51f2a",
    lang: "cs-CZ",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
    ]
  };
}
