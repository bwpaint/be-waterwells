import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | B-E Waterwell Services",
    default: "North Houston Waterwell Drilling & Pump Services | B-E Waterwell Services",
  },
  description:
    "B-E Waterwell Services - North Houston's trusted waterwell drilling, pump installation, and repair specialists since 1979. Serving Magnolia, Tomball, The Woodlands, Spring and Conroe. Call (281) 448-4447.",
  metadataBase: new URL("https://bewaterwells.com"),
  openGraph: {
    siteName: "B-E Waterwell Services",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
