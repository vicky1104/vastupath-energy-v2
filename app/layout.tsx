import type { Metadata, Viewport } from "next";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource-variable/jost/index.css";
import "./globals.css";
import { asset } from "@/lib/asset";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WaPill from "@/components/WaPill";

export const metadata: Metadata = {
  metadataBase: new URL("https://vicky1104.github.io/vastupath-energy-v2/"),
  title: { default: "Vastupath Energy | Vastu Consultant in Ahmedabad & Online", template: "%s | Vastupath Energy" },
  description:
    "Practical Vastu consultation for homes, offices, factories and plots, with remedies that need no demolition. Site visits in Ahmedabad and online consultations worldwide. Get a quote on WhatsApp.",
  icons: { icon: asset("/logo.png") },
  openGraph: { title: "Vastupath Energy", description: "Vastu today, harmony tomorrow.", type: "website" },
};

export const viewport: Viewport = { themeColor: "#3d4a2e" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WaPill />
      </body>
    </html>
  );
}
