import React from "react";
import DarkMode from "./DarkMode";
import { CiBoxList } from "react-icons/ci";
import { Tooltip } from "@chakra-ui/react";
import { IoIosCreate } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <main className="bg-Light dark:bg-Dark min-h-screen text-Light dark:text-Dark flex justify-center items-center px-6 relative">
      <span className="absolute top-5 right-5">
        <DarkMode
          iconMoon="text-Dark"
          iconSun="text-Light"
          hoverDark="hover:bg-DarkBlur"
          hoverLight="hover:bg-LightBlur"
        />
      </span>

      <div className="bg-[#BCA37F] dark:bg-[#FFF5E0] w-full md:w-4/6 lg:w-2/6 h-[450px] md:h-[550px] lg:h-[500px] xl:h-[450px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#FFF2D8] dark:scrollbar-thumb-[#141E46] scrollbar-track-transparent rounded-xl py-4 md:py-6 px-5 md:px-7">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl flex items-center gap-1">
            TO-DO LIST
            <span>
              <CiBoxList />
            </span>
          </h1>
          <Tooltip
            hasArrow
            label={pathname === "/" ? "Create" : "Back"}
            bg="gray.700"
            openDelay={300}
            placement="top"
          >
            {pathname === "/" ? (
              <Link to="/create" className="text-2xl">
                <IoIosCreate />
              </Link>
            ) : (
              <Link to="/" className="text-2xl">
                <FaArrowCircleLeft />
              </Link>
            )}
          </Tooltip>
        </div>
        {children}
      </div>
    </main>
  );
};

export default Layout;
