import type { Metadata, Viewport } from "next";
import "@fontsource/marcellus/400.css";
import "@fontsource-variable/manrope/index.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WhatsAppFab } from "@/components/Interactive";

export const metadata: Metadata = {
  metadataBase: new URL("https://vastupath-energy.vercel.app"),
  title: { default: "Vastupath Energy | Vastu Consultation in Ahmedabad & Online", template: "%s | Vastupath Energy" },
  description:
    "Practical Vastu guidance for homes, offices and plots, with remedies that need no demolition. Site visits in Ahmedabad, online consultations anywhere. Message on WhatsApp for a quote.",
  icons: { icon: "/logo.png" },
  openGraph: { title: "Vastupath Energy", description: "Vastu today, harmony tomorrow.", images: ["/logo.png"] },
};

export const viewport: Viewport = { themeColor: "#4a0e1f" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
