import React, { useContext, useEffect, useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import {NavLink } from "react-router-dom";
import UserName from "./UserName";
import NavButton from "./../NavButton/NavButton";
import { ThemeContext } from "../Context/ThemeContext";
import BuutonDark from "../BuutonNavDark/BuutonDark";

export default function NavBar({ dataLink, userName, path }) {
  const [bgcolor, setBgcolor] = useState(false);
  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 5) {
        setBgcolor(true);
      } else {
        setBgcolor(false);
      }
    };
    window.addEventListener("scroll", handlescroll);
  }, []);
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
    console.log(theme);
  }, []);
  return (
    <div className="relative w-full h-[72px] md:h-20 lg:h-29">
      <nav
        className={`${
          bgcolor ? "shadow-xl z-10 h-[72px]" : "md:h-20 lg:h-29"
        } bg-white dark:bg-darkMode lk-Navbar w-full flex fixed justify-between items-center h-[72px] text-nav font-inter px-5 lg:px-28`}
      >
        <UserName userName={userName} path={path} />
        <div className=" hidden md:flex justify-between items-center">
          <div className="links flex justify-between items-center gap-3.5 pe-3.5 lg:pe-[22px]">
            {dataLink.map((item, index) => {
              return (
                <NavLink
                  className={({ isActive }) => {
                    return `lk-link text-lg text-nav dark:text-white leading-6 font-normal lg:text-xl ${
                      isActive
                        ? "border-b border-darkMode  dark:border-white"
                        : ""
                    }`;
                  }}
                  to={item.path}
                  key={index}
                >
                  {item.link}
                </NavLink>
              );
            })}
          </div>
          {theme == "dark" ? <BuutonDark /> : <NavButton />}
        </div>
        <HiMiniBars3
          className="size-8 text-nav dark:text-white cursor-pointer md:hidden"
          onClick={() => setToggle(!toggle)}
        />
      </nav>
      <div
        className={`links pb-5 flex flex-col h-screen justify-center items-center bg-white  dark:bg-darkMode duration-1000 fixed w-full ${
          toggle ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div onClick={() => setToggle(false)}><UserName userName={userName} path={path} /></div>
        <div className="gap-5 flex flex-col justify-center items-center f-full pt-13 ">
          {dataLink.map((item, index) => {
            return (
              <NavLink
                className={({ isActive }) => {
                  return `lk-link text-lg text-nav dark:text-white leading-6 font-normal lg:text-xl ${isActive
                      ? "border-b border-darkMode  dark:border-white"
                      : ""
                  }`;
                }}
                onClick={() => setToggle(!toggle)}
                to={item.path}
                key={index}
              >
                {item.link}
              </NavLink>
            );
          })}
          {theme == "dark" ? <div onClick={() => setToggle(!toggle)}><BuutonDark /></div> : <div onClick={() => setToggle(!toggle)}><NavButton /></div>}
        </div>
        <IoClose
          className="size-8 text-nav dark:text-white cursor-pointer absolute bottom-5"
          onClick={() => setToggle(!toggle)}
        />
      </div>
    </div>
  );
}
