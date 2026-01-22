import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import siteData from "@/data/site";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${siteData.name} - ${siteData.title}`,
  description: siteData.description,
  keywords: [
    "web development",
    "frontend developer",
    "react",
    "next.js",
    "portfolio",
    "ui/ux design",
    siteData.name,
  ],
  authors: [{ name: siteData.name, url: `mailto:${siteData.email}` }],
  creator: siteData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${siteData.name} - ${siteData.title}`,
    description: siteData.description,
    siteName: siteData.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteData.name} - ${siteData.title}`,
    description: siteData.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.className} antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
