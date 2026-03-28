import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-03-28");

  return [
    {
      url: "https://www.creamy-catering.de/",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
