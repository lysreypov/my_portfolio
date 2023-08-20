import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [active, setActive] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-40 ${
        scrolled ? "bg-transparent" : "bg-transparent"
      }`}
    >
      <motion.div
        initial={{ y: -150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, type: "easeInOut" }}
        className="w-full flex justify-between items-center max-w-6xl mx-auto"
      >
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="flex justify-center items-center drop-shadow-xl bg-white w-14 h-14 cursor-pointer rounded-full">
            <p className="text-black text-[25px] font-bold">
              P<span className="text-purple">.</span>
            </p>
          </div>
        </Link>

        <div className="bg-white drop-shadow-xl hidden sm:flex p-1 rounded-full">
          <ul className="list-none flex flex-row gap-1">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title
                    ? "text-white bg-purple rounded-full"
                    : "text-black hover:text-purple"
                } py-3 px-4 drop-shadow-xl text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-1 sm:flex-none justify-end mr-2">
          <div
            className="drop-shadow-xl bg-white p-4 cursor-pointer rounded-full hover:text-purple text-gray-700"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <BsFillSunFill className="w-6 h-6 drop-shadow-xl" />
            ) : (
              <BsFillMoonStarsFill className="w-6 h-6 drop-shadow-xl" />
            )}
          </div>
        </div>

        <div className="sm:hidden flex justify-end items-center">
          <div
            className="drop-shadow-xl bg-white p-4 cursor-pointer rounded-full"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            {toggleMenu ? (
              <RxCross1 className="w-7 h-7 text-black drop-shadow-xl" />
            ) : (
              <HiMenu className="w-7 h-7 text-black drop-shadow-xl" />
            )}
          </div>

          <div
            className={`${
              !toggleMenu ? "hidden" : "flex"
            } p-6 bg-white drop-shadow-xl absolute top-20 right-2 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-purple" : "text-black"
                  }`}
                  onClick={() => {
                    setToggleMenu(!toggleMenu);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
