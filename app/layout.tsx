import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { SITE_URL } from "../lib/siteConfig";

export const metadata: Metadata = {
  title: {
    // Each page authors its full title (brand included), so the template is a pass-through.
    // This prevents the brand name from being appended a second time.
    template: "%s",
    default: "Houston Area Waterwell Drilling & Pump Services | B-E Waterwell Services",
  },
  description:
    "B-E Waterwell Services - Houston's trusted waterwell drilling, pump installation, and repair specialists since 1979. Serving Magnolia, Tomball, The Woodlands, Spring and Conroe. Call (281) 448-4447.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName: "B-E Waterwell Services",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* WebWize Proof overlay — activates only when a ?proof= or ?review= token is present */}
        <Script
          src="https://bewaterwellscms.wp1.sh/wp-content/plugins/webwize-connect/modules/proof/assets/launcher.js?ver=1.7.2"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
