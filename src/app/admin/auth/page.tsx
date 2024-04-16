"use client";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaGithub } from "react-icons/fa";


export default function Auth({ searchParams: { token } }: { searchParams: { token: string }, params: {} }) {


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
    <div className="flex h-screen w-screen justify-center items-center ">
      <Link href={"/"} className="absolute top-4 left-6 text-gray-500 dark:text-gray-400 flex gap-2 items-center">
        <ChevronLeftIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        <p className="text-sm">Tillbaka</p>
      </Link>

      <div className="px-32 py-12 flex flex-col justify-center items-center border-lg  bg-white dark:bg-black sm:shadow-md shadow-yellow-700/20 rounded-lg">
        <Image
          loading="lazy"
          quality={100}
          src="/logo_512.png"
          className="mb-4 aspect-square h-24 w-24 "
          width={512}
          height={512}
          alt={""}
        />
        <div className="items-center flex flex-col">
          <h1 className="font-medium flex items-center text-2xl ">Dalopanel</h1>
          <div className="flex flex-col gap-4 ">

            <p className="text-center text-gray-500">
              {token ? "Skapa konto med" : "Logga in med"}
            </p>
            <hr className="w-1/2 mx-auto my-2 border-gray-300 dark:border-gray-700" />
            <div className="flex gap-3 sm:flex-row flex-col">
              <button
                onClick={signInAlternatives.discord.callback}
                className="border-blue-600 border-2 text-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 justify-center"
              >
                <FaDiscord /> <span>Discord</span>
              </button>
              <button
                onClick={signInAlternatives.github.callback}
                className="border-neutral-800 border-2 text-neutral-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 justify-center"
              >
                <FaGithub />
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
