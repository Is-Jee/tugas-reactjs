import { useEffect, useState } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

const DarkMode = ({iconMoon, iconSun, hoverDark, hoverLight}) => {
  const [theme, setTheme] = useState(
    typeof localStorage !== "undefined" && localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "system"
  );
  const [showDarkMode, setShowDarkMode] = useState(
    typeof localStorage !== "undefined" &&
      localStorage.getItem("theme") !== "dark"
      ? true
      : false
  );

  const element = typeof document !== "undefined" && document.documentElement;
  const darkQuery =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)");

  const onWindowMatch = () => {
    if (typeof localStorage !== "undefined") {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) && darkQuery.matches)
      ) {
        element.classList.add("dark");
        setShowDarkMode(false);
      } else {
        element.classList.remove("dark");
        setShowDarkMode(true);
      }
    }
  };

  useEffect(() => {
    onWindowMatch();
  });

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        setShowDarkMode((prev) => !prev);
        typeof localStorage !== "undefined" &&
          localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        setShowDarkMode((prev) => !prev);
        typeof localStorage !== "undefined" &&
          localStorage.setItem("theme", "light");
        break;
      default:
        onWindowMatch();
        break;
    }
  }, [theme]);

  return (
    <div
      className={`${
        showDarkMode ? hoverDark : hoverLight
      } z-30 text-xl flex justify-center items-center p-2 rounded-full h-max`}
    >
      {showDarkMode ? (
        <span
          className={`cursor-pointer ${iconMoon}`}
          onClick={() => setTheme("dark")}
        >
          <BsFillMoonFill />
        </span>
      ) : (
        <span
          className={`cursor-pointer ${iconSun}`}
          onClick={() => setTheme("light")}
        >
          <BsSunFill />
        </span>
      )}
    </div>
  );
};

export default DarkMode;
