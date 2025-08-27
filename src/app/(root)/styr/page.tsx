import Styrcard from "@/components/styrcard";
import { IBoardAttributes, StyrelseMember } from "@/types/types";

/*
Elin Olsson - Kapten / Ordförande
Johan Sandred - Vice ordförande
Ida Rynger - Sekreterare
Linus Sjöö - Kassör
Victor Herlin - Materialansvarig
Lowe Göth - Ledamot
Dino Brankovic - Ledamot
Omar Farouq Salloum - Ledamot
Axel Lintjärn - Ledamot
Tindra Wessman - Suppleant
Marcus Hammarström - Suppleant
Caroline Hautaniemi - Suppleant
*/

const styrelse: StyrelseMember[] = [
  {
    forename: "Elin",
    surname: "Olsson",
    nickname: "Saft",
    role: "Kapten",
  },
  {
    forename: "Johan",
    surname: "Sandred",
    nickname: "Nisse",
    role: "Vice ordförande",
  },
  {
    forename: "Ida",
    surname: "Rynger",
    nickname: "Predator",
    role: "Sekreterare",
  },
  {
    forename: "Linus",
    surname: "Sjöö",
    nickname: "FILO",
    role: "Kassör",
  },
  {
    forename: "Victor",
    surname: "Herlin",
    nickname: "2,5",
    role: "Materialansvarig",
  },
  {
    forename: "Lowe",
    surname: "Göth",
    nickname: "Sniper",
    role: "Ledamot",
  },
  {
    forename: "Omar",
    surname: "Salloum",
    nickname: "Xzibit",
    role: "Ledamot",
  },
  {
    forename: "Axel",
    surname: "Lintjärn",
    nickname: "Shazam",
    role: "Ledamot",
  },
  {
    forename: "Tindra",
    surname: "Wessman",
    nickname: "main{..}",
    role: "Suppleant",
  },
  {
    forename: "Marcus",
    surname: "Hammarström",
    nickname: "ätaöl",
    role: "Suppleant",
  },
  {
    forename: "Caroline",
    surname: "Hautaniemi",
    nickname: undefined,
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
