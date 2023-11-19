import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import ButtonHomePage from "./ButtonHomePage";

import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between ">
          <div className="flex">
            <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
            <h1 className="pt-1 pl-2 font-bold text-xl">CleanEarth</h1>
          </div>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <IoMdMenu name={`${open ? "close" : "menu"}`} />
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-8 px-60">
          <li>
            <NavLink to="/" className="py-7 px-3 inline-block font-medium  ">
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="py-7 px-3 inline-block font-medium">
              Edukasi
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="py-7 px-3 inline-block font-medium">
              Komunitas
            </NavLink>
          </li>
        </ul>
        <div className="md:block hidden">
          <ButtonHomePage />
        </div>

        {/* Mobile navbar */}
        <ul
          className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li>
            <NavLink to="/" className="py-7 px-3 inline-block font-medium  ">
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="py-7 px-3 inline-block font-medium">
              Edukasi
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="py-7 px-3 inline-block font-medium">
              Komunitas
            </NavLink>
          </li>
          <div className="py-5">
            <ButtonHomePage />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
