import Styrcard from "@/components/styrcard";
import { IBoardAttributes, StyrelseMember } from "@/types/types";

const styrelse: StyrelseMember[] = [
  {
    forename: "Viktor",
    surname: "Dahlblom",
    nickname: "Gump",
    role: "Kapten",
  },
  {
    forename: "Nikola",
    surname: "Herou",
    nickname: "Meta",
    role: "Vice ordförande",
  },
  {
    forename: "Margo",
    surname: "Zarytovska",
    nickname: "Brand",
    role: "Sekreterare",
  },
  {
    forename: "Martin",
    surname: "Söderman",
    nickname: "Ninja",
    role: "Kassör",
  },
  {
    forename: "Karl",
    surname: "Malmkvist",
    nickname: "TP",
    role: "Materialansvarig",
  },
  {
    forename: "Johan",
    surname: "Skytt",
    nickname: "Dunder",
    role: "Ledamot",
  },
  {
    forename: "Johan",
    surname: "Sandred",
    nickname: "Nisse",
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
