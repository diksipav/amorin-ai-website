import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "es", "sr"],
    defaultLocale: "en",
  },
};

export default nextConfig;
