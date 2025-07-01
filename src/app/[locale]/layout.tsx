import type { Metadata } from "next";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { notFound } from "next/navigation";
import "../globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col items-center bg-theme">
        <NextIntlClientProvider>
          <Navigation />
          <div id="root" className="flex-grow">
            {children}
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
