import type { Metadata } from "next";
import { DM_Sans, Rajdhani } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "+91Bikes – Affordable Mobility For All",
  description:
    "Sell your bike from home. Get instant payment in 30 minutes. Free doorstep inspection and transparent paperwork. India's fastest bike selling platform.",
  keywords: "sell bike, used bikes, two wheeler, bike selling, instant payment, +91Bikes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${rajdhani.variable}`}>
        {children}
      </body>
    </html>
  );
}
