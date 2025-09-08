import type { Metadata } from "next";
import { Noto_Serif_Gujarati } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "@/components/header/header";
import { Providers } from "@/components/product/Providers"; // ✅ import wrapper

// Apply the font Noto Serif Gujarati to our application
const notoSerifGujarati = Noto_Serif_Gujarati({
  subsets: ["latin"],
  weight: "400",
});

// Metadata of our project
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
        url: "/amazonCard.jpg", // ✅ remove /public (Next serves public/ automatically)
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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={notoSerifGujarati.className}>
        <Providers>
          {" "}
          {/* ✅ Redux store wrapper */}
          <Header /> {/* keep header inside Redux too if it uses hooks */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
