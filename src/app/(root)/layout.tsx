import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className=" p-10 md:p-24 md:pt-32 pt-32  min-h-screen h-full flex flex-col">
        {children}
      </main>
      <Footer
        items={[
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
                title: "Instagram",
                link: "https://www.instagram.com/dalo_mdu",
              },
              {
                title: "Discord",
                link: "https://discord.gg/Y6Sw5WH",
              },
              {
                title: "GitHub",
                link: "https://github.com/dalo-mdu",
              },
              {
                title: "Facebook",
                link: "https://www.facebook.com/datalogiforeningen",
              },
            ],
          },
        ]}
      />
    </>
  );
}
