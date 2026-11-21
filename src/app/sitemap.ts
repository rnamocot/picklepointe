import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: [string, number][] = [
    ["/", 1],
    ["/book", 0.9],
    ["/courts", 0.8],
    ["/programs", 0.8],
    ["/rates", 0.8],
    ["/contact", 0.7],
  ];
  return routes.map(([path, priority]) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority,
  }));
}
