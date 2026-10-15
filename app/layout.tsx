import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  icons: { icon: "/logo.svg" },
  title: "Viaprix — Navigating Your Digital Future",
  description:
    "Purpose-built ERP, POS, SaaS and custom software. Viaprix helps ambitious businesses move forward.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
