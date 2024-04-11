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
      <body className={inter.className}>
        <Header />
      <main className=" p-10 md:p-24 md:pt-32 pt-32  min-h-screen h-full flex flex-col">

        {children}
        </main>
        <Footer items={
          
          [
            {
              title: "Dalo",
              items: [
                {
                  title: "Om oss",
                  link: "/about",
                },
                {
                  title: "Ny Student",
                  link: "/new",
                },
                {
                  title: "Sånger",
                  link: "/songbook",
                },

                {
                  title: "Kontakt",
                  link: "/contact",
                },
              ],
            },
          {
            title: "Social",
            items: [
              {
                title: "Facebook",
                link: "https://www.facebook.com/",
              },
              {
                title: "Instagram",
                link: "https://www.instagram.com/",
              },
              {
                title: "Discord",
                link: "https://discord.gg/",
              },
              {
                title: "GitHub",
                link: ""
              }
              

            ],
          }
        ]}/>
        </body>
      
    </html>
  );
}
