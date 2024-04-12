import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DALO - MDU",
  description: "Här pluggar framtidens dataloger och annat schysst folk på Mälardalens Universitet.",
  openGraph: {
    title: "DALO - Mälardalens Universitet",
    description: "Här pluggar framtidens dataloger och annat schysst folk på Mälardalens Universitet.",
    images: [
      {
        url: "https://dalo.se/logo_512.png",
        alt: "DALO - MDU",
      },
    ],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-black `}>
        {children}
        </body>
      
    </html>
  );
}
