import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { FaMoon, FaSun } from "react-icons/fa6";

export const TopBar = () => {
  const { setTheme, theme } = useTheme();

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const changeTheme = () => {
    if (theme == "dark") {
      console.log("hi");
      return setTheme("light");
    } else {
      console.log("hi");
      return setTheme("dark");
    }
  };

  return (
    <>
      <div className="h-[90px] w-full gap-10 backdrop-blur-lg top-0 fixed z-10 justify-center text-center flex">
        <h1 className="text-xl md:text-3xl mt-7 ml-4 md:m-6 font-bold">
          Al-Quran Website
        </h1>
        <div className="">
          <div className="inline-block md:hidden">
            <button
              className="btn px-2 m-[25px]"
              onClick={() => {
                const menus = document.getElementById("menus");
                if (menus?.classList.contains("left-0")) {
                  menus.classList.remove("left-0");
                  menus.classList.add("left-full");
                } else {
                  menus?.classList.remove("left-full");
                  menus?.classList.add("left-0");
                }
              }}
            >
              <BiMenu />
            </button>
          </div>
          <div
            id="menus"
            className="absolute flex-col transition-all flex w-full bg-opacity-80 left-full dark:bg-neutral-950 dark:bg-opacity-80 bg-neutral-300 h-screen md:bg-transparent dark:md:bg-transparent md:flex-row md:left-0 md:relative md:inline-block md:h-0 md:w-auto"
          >
            <Link href="/">
              <button className="btn m-5">Home</button>
            </Link>
            <Link href="/support">
              <button className="btn m-5">Support</button>
            </Link>
            <Link href="/read">
              <button className="btn m-5">Al-Quran</button>
            </Link>
          </div>
          <div className="inline-block">
            <button
              className="btn px-2 m-[25px] md:m-5 md:px-3 md:py-3"
              onClick={changeTheme}
            >
              {theme == "dark" ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
