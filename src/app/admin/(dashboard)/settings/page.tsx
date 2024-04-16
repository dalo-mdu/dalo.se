import UserManager from "@/components/admin/userManager";

export default function Settings() {
  return (
    <>
      <h1>Inställningar</h1>
      <section>
        <h2>
          Användare
        </h2>
        <UserManager />
      </section>
    </>
  );
}
