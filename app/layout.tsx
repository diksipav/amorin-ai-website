import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "Amorin AI",
  description:
    "Amorin AI helps small and medium businesses to save time, reduce costs, and improve efficiency with custom AI solutions.",
  authors: [{ name: "Amorin AI" }],
  openGraph: {
    title: "Amorin AI",
    description:
      "Amorin AI helps small and medium businesses to save time, reduce costs, and improve efficiency with custom AI solutions.",
    type: "website",
    url: "https://www.amorin.ai",
    images: [
      {
        url: "https://www.amorin.ai/profile.png",
        width: 1200,
        height: 630,
        alt: "Amorin AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@amorin.ai",
    images: ["https://www.amorin.ai/profile.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="min-h-screen flex flex-col"
        style={{
          background:
            "radial-gradient(ellipse at bottom, #340b38 0%, #1f0c20 100%)",
        }}
      >
        {/* <NextIntlClientProvider> */}
        <Navigation />
        <div id="root" className="flex-grow">
          {children}
        </div>
        <Footer />
        {/* </NextIntlClientProvider> */}
      </body>
    </html>
  );
}
