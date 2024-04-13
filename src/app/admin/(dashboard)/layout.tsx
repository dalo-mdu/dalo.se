import Header from "@/components/header";
import SideBar from "@/components/admin/sidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex  h-screen max-w-screen w-screen">
        <SideBar />
        <section className="max-h-full h-full overflow-auto flex-1 p-4">
        {children}
        </section>
      </main>
    </>
  );
}
