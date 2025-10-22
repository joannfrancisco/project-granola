import { SpeedInsights } from "@vercel/speed-insights/next";
import { Chau_Philomene_One, Asul } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const chauPhilomeneOne = Chau_Philomene_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-chau-philomene-one",
});

const asul = Asul({
  weight: ["400"] /*400 or 700*/,
  subsets: ["latin"],
  variable: "--font-asul",
});

export const metadata = {
  title: "gr8nola | Delicious, Low Sugar Superfood Granola",
  description:
    "Healthy, low-sugar superfood granola. No GMOs, soy, dairy or refined sugar. We make healthy snacking simple. Are you #HungryForGr8ness?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${chauPhilomeneOne.variable} ${asul.variable} antialiased`}
      >
        <Navbar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
