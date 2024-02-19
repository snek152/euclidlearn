import type { Metadata } from "next";
import {
  Antic,
  Arimo,
  DM_Serif_Display,
  Raleway,
  Urbanist,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// const dm = DM_Serif_Display({
//   weight: "400",
//   style: "normal",
//   display: "swap",
//   variable: "--font-dm-serif-display",
//   subsets: ["latin"],
// });

const dm = Arimo({
  weight: "600",
  style: "normal",
  display: "swap",
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
});

const antic = Urbanist({
  weight: "variable",
  style: "normal",
  display: "swap",
  variable: "--font-dekko",
  subsets: ["latin"],
});

const dekko = Raleway({
  weight: "variable",
  style: "normal",
  display: "swap",
  variable: "--font-antic",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EuclidLearn | Home",
  description:
    "Voluptate incididunt nostrud deserunt ex laboris eu veniam proident.",
  openGraph: {
    type: "website",
    title: "EuclidLearn | Home",
    description:
      "Irure consequat commodo minim duis aliqua nisi voluptate commodo non mollit dolor sit cillum.",
    locale: "en_US",
    siteName: "EuclidLearn",
    url: "https://euclidlearn.com",
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dm.variable} ${antic.variable} ${dekko.variable}`}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
