import Styrcard from "@/components/styrcard";
import { IBoardAttributes, StyrelseMember } from "@/types/types";

/*
Tindra Wessman - Ordförande
Elin Olsson - Vice ordförande
Ida Rynger - Sekreterare
Axel Lintjärn - Kassör
Marcus Hammarström - Ledamot
Dino Brankovic - Materialansvarig
Oskar Sturebrand - Ledamot
Albin Sedlacek - Ledamot
Victor Herlin - Ledamot
Robin Fransson - Suppleant
Kevin Eriksson - Suppleant
*/

const styrelse: StyrelseMember[] = [
  {
    forename: "Robin",
    surname: "Fransson",
    nickname: "Mäster Sprut",
    role: "Suppleant",
  },
  {
    forename: "Victor",
    surname: "Herlin",
    nickname: "2,5",
    role: "Ledamot",
  },
  {
    forename: "Oskar",
    surname: "Sturebrand",
    nickname: "Pippi",
    role: "Ledamot",
  },
  {
    forename: "Albin",
    surname: "Sedlacek",
    nickname: "Fredrik",
    role: "Ledamot",
  },
  {
    forename: "Dino",
    surname: "Brankovic",
    nickname: "Race Condition",
    role: "Materialansvarig",
  },
  {
    forename: "Axel",
    surname: "Lintjärn",
    nickname: "Shazam",
    role: "Kassör",
  },
  {
    forename: "Ida",
    surname: "Rynger",
    nickname: "Predator",
    role: "Sekreterare",
  },
  {
    forename: "Elin",
    surname: "Olsson",
    nickname: "Saft",
    role: "Vice ordförande",
  },
  {
    forename: "Tindra",
    surname: "Wessman",
    nickname: "main{..}",
    role: "Ordförande",
  },
  {
    forename: "Kevin",
    surname: "Eriksson",
    nickname: "CATπ",
    role: "Suppleant",
  },
  {
    forename: "Marcus",
    surname: "Hammarström",
    nickname: "ätaöl",
    role: "Ledamot",
  },
];
export default async function Styrelse() {


  styrelse.sort((a, b) => {
    const roles = [
      "Ordförande",
      "Vice ordförande",
      "Sekreterare",
      "Kassör",
      "Ledamot",
      "Materialansvarig",
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
