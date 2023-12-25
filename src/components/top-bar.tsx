import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
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
        <h1 className="text-3xl m-6 font-bold">Al-Quran Website</h1>
        <div className="">
          <a href="/">
            <button className="btn m-5">Home</button>
          </a>
          <a>
            <button className="btn m-5">Donate</button>
          </a>
          <a href="/read">
            <button className="btn m-5">Al-Quran</button>
          </a>
          <button className="btn p-4 py-3 m-5" onClick={changeTheme}>
            {theme == "dark" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
    </>
  );
};
