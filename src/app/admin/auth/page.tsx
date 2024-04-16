"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaGithub } from "react-icons/fa";

export default function Auth({
  searchParams: { token },
}: {
  searchParams: { token: string };
  params: {};
}) {
  // if token is in url
  const signInAlternatives = {
    discord: {
      callback: () => {
        console.log("Discord");
      },
    },
    github: {
      callback: () => {
        console.log("Github");
      },
    },
  };

  return (
    <div className="grid h-screen w-screen md:grid-cols-2 grid-cols-1 justify-center items-center bg-neutral-900 p-2">
      <div className="flex justify-center items-center" >
        <div className="relative h-64 w-64 ">
        
        <Image
          loading="lazy"
          quality={100}
          src="/logo_512.png"
          className="mb-4 aspect-square h-64 w-64 blur-xl opacity-50 absolute top-0"
          width={512}
          height={512}
          alt={""}
        />
        <Image
          loading="lazy"
          quality={100}
          src="/logo_512.png"
          className="mb-4 aspect-square h-64 w-64 top-0 absolute "
          width={512}
          height={512}
          alt={""}
        />
        </div>
      </div>
      <Link
        href={"/"}
        className="absolute top-4 left-6 text-white dark:text-gray-400 flex gap-2 items-center"
      >
        <ChevronLeftIcon className="h-5 w-5 text-white dark:text-gray-400" />
        <p className="text-sm">Tillbaka</p>
      </Link>

      <div className="items-center flex flex-col bg-white h-full justify-center rounded-lg">
        <h1 className="font-medium flex items-center text-2xl ">Dalopanel</h1>
        <div className="flex flex-col gap-4 ">
          <p className="text-center text-gray-500">
            {token ? "Skapa konto med" : "Logga in med"}
          </p>
          <hr className="w-1/2 mx-auto my-2 border-gray-300 dark:border-gray-700" />
          <div className="flex gap-3 flex-col">
            <Button
              variant="outline"
              onClick={signInAlternatives.discord.callback}
              className=" border-2 text-blue-600 px-4 py-2  flex items-center gap-2 justify-center"
            >
              <FaDiscord /> <span>Discord</span>
            </Button>
            <Button
              variant="outline"
              onClick={signInAlternatives.github.callback}
              className=" border-2 text-neutral-800  px-4 py-2  flex items-center gap-2 justify-center"
            >
              <FaGithub />
              Github
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
