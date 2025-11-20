import Styrcard from "@/components/styrcard";
import { IBoardAttributes, StyrelseMember } from "@/types/types";

const styrelse: StyrelseMember[] = [
  {
    forename: "Linus",
    surname: "Sjöö",
    nickname: "FILO",
    role: "Kapten",
  },
  {
    forename: "Karl",
    surname: "Malmkvist",
    nickname: "TP",
    role: "Vice ordförande",
  },
  {
    forename: "Anna",
    surname: "Nematbakhsh",
    nickname: "Äpple",
    role: "Sekreterare",
  },
  {
    forename: "Hampus",
    surname: "Walldeck",
    nickname: "GÄMF",
    role: "Kassör",
  },
  {
    forename: "Lowe",
    surname: "Göth",
    nickname: "Sniper",
    role: "Materialansvarig",
  },
  {
    forename: "Elin",
    surname: "Olsson",
    nickname: "Saft",
    role: "Ledamot",
  },
  {
    forename: "Omar",
    surname: "Salloum",
    nickname: "Xzibit",
    role: "Ledamot",
  },
  {
    forename: "Emelie",
    surname: "Sandberg",
    nickname: "Lille Skutt",
    role: "Ledamot",
  },
  {
    forename: "Liam",
    surname: "Pettersson",
    nickname: "Herden",
    role: "Ledamot",
  },
  {
    forename: "Rafaat",
    surname: "Atia",
    nickname: "Hök",
    role: "Suppleant",
  },
  {
    forename: "Sixten",
    surname: "Elsner",
    nickname: "Mr. Cool",
    role: "Suppleant",
  },
];
export default async function Styrelse() {


  styrelse.sort((a, b) => {
    const roles = [
      "Ordförande",
      "Vice ordförande",
      "Sekreterare",
      "Kassör",
      "Materialansvarig",
      "Ledamot",
      "Suppleant",
    ];
    return roles.indexOf(a.role) - roles.indexOf(b.role);
  });
  return (
    <main className="max-w-6xl w-full mx-auto mt-10">
      <h1 className="text-5xl mb-6 dark:text-white">Styrelse</h1>
      <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
        {styrelse.map((member, index) => {
          return <Styrcard key={index} info={member} />;
        })}
      </div>
    </main>
  );
}
export const revalidate = 60;
