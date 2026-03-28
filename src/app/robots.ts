import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.creamy-catering.de/sitemap.xml",
    host: "www.creamy-catering.de",
  };
}
