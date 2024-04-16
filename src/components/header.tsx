"use client";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hideNavHeader, setHideNavHeader] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const delta = currentScrollPos - prevScrollPos;
    const isScrolledDown = delta > 0;
    if (isScrolledDown && currentScrollPos > 100) setHideNavHeader(true);
    else setHideNavHeader(false);
    setPrevScrollPos(currentScrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={`fixed  z-50 left-0 w-screen px-5 transition-[top] duration-500 ease-in-out ${
        hideNavHeader ? "-top-20 md:top-8" : "top-8"
      }`}
    >
      <nav
        className={`bg-white/50  dark:bg-black/50 md:px-16 px-6 rounded-[2rem] border-yellow-500/30 border shadow-yellow-700/5 shadow-lg backdrop-blur-lg justify-between transition-all duration-500 ease-in-out ${
          isMenuOpen ? "h-96 lg:h-16" : "h-16"
        }`}
      >
        <div className="h-16 w-full flex items-center">
          <div className="flex flex-1 gap-8 items-center">
            <Link onClick={() => setIsMenuOpen(false)} href={"/"}>
              <h1 className="text-2xl font-medium dark:text-white ">Dalo</h1>
            </Link>
            <div className="  text-lg w-full h-full dark:text-white gap-2 items-center hidden lg:flex ">
              <div>
                <Link href={"/about"} className="  block px-4 transition-all ">
                  Om oss
                </Link>
              </div>
              <div>
                <Link href={"/new"} className="  block px-4 transition-all ">
                  Ny Student
                </Link>
              </div>
              <div>
                <Link
                  href={"/songbook"}
                  className="  block px-4 transition-all "
                >
                  Sånger
                </Link>
              </div>
              <div>
                <Link href={"/styr"} className="  block px-4 transition-all ">
                  Styrelse
                </Link>
              </div>
              <div>
                <Link
                  href={"/contact"}
                  className="  block px-4 transition-all "
                >
                  Kontakt
                </Link>
              </div>
            </div>
          </div>
          <Link
            href={"/member/new"}
            className="px-10 py-2 rounded-full dark:bg-white dark:text-black bg-black text-yellow-50 font-medium hidden lg:flex "
          >
            Gå med
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="bli medlem"
            className="relative  w-9 h-9 "
          >
            <Transition
              show={!isMenuOpen}
              enter="transition-all duration-150 delay-200"
              enterFrom="opacity-0 -rotate-45"
              enterTo="opacity-100"
              leave="transition-all duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0 -rotate-45"
              className="absolute top-0 left-0"
            >
              <Bars3Icon className="lg:hidden w-9 h-9   dark:text-white " />
            </Transition>
            <Transition
              show={isMenuOpen}
              enter="transition-all duration-150 delay-200"
              enterFrom="opacity-0 rotate-45"
              enterTo="opacity-100"
              leave="transition-all duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0 rotate-45"
              className="absolute top-0 left-0"
              
            >
              <XMarkIcon className="lg:hidden w-9 h-9   dark:text-white " />
            </Transition>
          </button>
        </div>

        <div
          className={`flex flex-col flex-1 just  lg:hidden overflow-hidden duration-500 opacity-0 justify-between w-full pb-4 ${
            isMenuOpen ? "h-72 opacity-100" : "h-0 delay-0"
          }`}
        >
          <div className="h-72 justify-between flex flex-col">
            <div>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href={"/about"}
                className="  block px-4 transition-all "
              >
                Om oss
              </Link>
            </div>
            <div>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href={"/new"}
                className="  block px-4 transition-all "
              >
                Ny Student
              </Link>
            </div>
            <div>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href={"/songbook"}
                className="  block px-4 transition-all "
              >
                Sånger
              </Link>
            </div>
            <div>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href={"/styr"}
                className="  block px-4 transition-all "
              >
                Styrelse
              </Link>
            </div>
            <div>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href={"/contact"}
                className="  block px-4 transition-all "
              >
                Kontakt
              </Link>
            </div>
            <div className="flex">
              <Link
                onClick={() => setIsMenuOpen(false)}
                href={"/member/new"}
                className=" py-2 flex-1 text-center rounded-full dark:bg-white dark:text-black bg-black text-yellow-50 font-medium  "
              >
                Gå med
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
