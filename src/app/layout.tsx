import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Footer } from "@/components/Footer";
import dynamic from "next/dynamic";
import JobCounter from "@/components/JobCounter";
import { Sidebar } from "@/components/Sidebar";
import { twMerge } from "tailwind-merge";

// Dynamically import FloatingWhatsApp to avoid SSR issues
const FloatingWhatsAppClient = dynamic(
  () => import("@/components/FloatingWhatsApp").then(mod => ({ default: mod.FloatingWhatsApp })),
  { ssr: false }
);

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Top Cut Tree Felling | Professional Tree Services in South Africa",
    template: "%s | Top Cut Tree Felling",
  },
  description: "Top Cut Tree Felling offers professional tree removal, trimming, and maintenance services. Owner always on-site.",
  keywords: "tree felling, tree removal, tree trimming, stump removal, tree services, South Africa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          poppins.variable,
          inter.variable,
          "flex flex-col antialiased min-h-screen bg-[var(--background-light)]"
        )}
      >
        <Sidebar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        {/* Global floating WhatsApp button */}
        <FloatingWhatsAppClient />
        <JobCounter />
      </body>
    </html>
  );
}
