import type { Metadata } from "next";
import { Noto_Serif_Gujarati } from "next/font/google";
import "./globals.css";

// to applay the font Noto Serif Gujarati to our application
const notoSerifGujarati = Noto_Serif_Gujarati({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// meta data of our project
export const metadata: Metadata = {
  title: "Amazon Clone",
  description: "Amazon Clone project built during DevWave training by group4.",
  authors: [{ name: "group4" }],
  keywords: ["Amazon Clone", "DevWave Training", "Next.js Project", "group4"],
  openGraph: {
    title: "Amazon Clone - DevWave Training",
    description:
      "Amazon Clone project built during DevWave training by group4.",
    url: "https://your-deployed-link.com",
    siteName: "Amazon Clone",
    images: [
      {
        url: "/public/amazonCard.jpg",
        width: 600,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSerifGujarati.className}>{children}</body>
    </html>
  );
}
