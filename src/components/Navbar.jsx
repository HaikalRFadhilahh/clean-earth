import { useState } from "react";
import Logo from "../assets/img/Logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
import { IoMdMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { nama, token } from "../store";
import { useRecoilState } from "recoil";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = (props) => {
  const { theme = "static" } = props;
  const [open, setOpen] = useState(false);
  const [name, setName] = useRecoilState(nama);
  const [tokenJWT, setTokenJWT] = useRecoilState(token);
  const [configToggle, setConfigToggle] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setName(undefined);
    setTokenJWT(undefined);
    setConfigToggle(false);
    setOpen(false);
    navigate("/");
  };

  return (
    <nav
      className={`w-screen ${
        theme == "transparent" ? "absolute top-0 left-0" : "bg-white"
      }`}
    >
      <div className='flex items-center justify-between md:px-3 lg:px-7'>
        <div className='z-50 p-5 md:w-auto w-full flex justify-between '>
          <div className='flex cursor-pointer' onClick={() => navigate("/")}>
            <img src={Logo} alt='logo' className='md:cursor-pointer h-9' />
            <h1
              className={`pt-1 pl-2 font-bold text-xl ${
                theme == "transparent" ? "text-white" : ""
              }`}
            >
              CleanEarth
            </h1>
          </div>
          <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
            <IoMdMenu name={`${open ? "close" : "menu"}`} />
          </div>
        </div>
        {/* Navigation For Desktop */}
        <ul
          className={`hidden md:flex gap-7 font-light font-poppins text-base`}
        >
          <li>
            <NavLink to={"/"}>Beranda</NavLink>
          </li>
          <li>
            <NavLink to={"/edukasi"}>Edukasi</NavLink>
          </li>
          <li>
            <NavLink to={"/komunitas"}>Komunitas</NavLink>
          </li>
        </ul>
        {name == undefined ? (
          <div className={"hidden md:flex gap-3"}>
            <Button
              className='outline outline-2 bg-[#B0D9B1] outline-black '
              type='submit'
            >
              <NavLink to='/daftar'>Daftar</NavLink>
            </Button>
            <Button
              className='bg-[#F6F6F6] outline outline-2 outline-black'
              type='submit'
            >
              <NavLink to='/masuk'>Masuk</NavLink>
            </Button>
          </div>
        ) : (
          <div
            className={
              "hidden md:flex px-2 rounded-2xl py-1 outline outline-2 bg-white outline-black gap-2 items-center relative cursor-pointer"
            }
            onClick={() => setConfigToggle(!configToggle)}
          >
            <div
              className={
                "w-8 aspect-square rounded-full bg-green-700 flex justify-center items-center"
              }
            >
              <FaUser width={"100%"} height={"100%"} color={"white"} />
            </div>
            <p className={"font-poppins font-medium text-sm"}>{name}</p>
            {/* Toggle Action User Navbar Start*/}
            <div
              className={`${
                configToggle ? "flex" : "hidden"
              } absolute -bottom-16 rounded-2xl py-1 px-2 w-full outline outline-1 bg-white outline-green-600 right-0 flex-col font-poppins`}
            >
              <NavLink to={"/"}>Akun Saya</NavLink>
              <button
                className={"w-fit text-red-600"}
                onClick={() => handleLogout()}
              >
                Logout
              </button>
            </div>
            {/* Toggle Action User Navbar End*/}
          </div>
        )}

        {/* Mobile navbar */}
        <ul
          className={`md:hidden flex flex-col items-center  bg-white fixed w-full h-full bottom-0 py-24 pl-4 duration-500 z-50 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li>
            <NavLink to='/' className='py-7 px-3 inline-block font-medium  '>
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/edukasi'
              className='py-7 px-3 inline-block font-medium'
            >
              Edukasi
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/komunitas'
              className='py-7 px-3 inline-block font-medium'
            >
              Komunitas
            </NavLink>
          </li>
          {name == undefined ? (
            <div className={"flex md:hidden gap-3 py-3"}>
              <NavLink to={"/daftar"}>
                <Button
                  className='outline outline-2 bg-[#B0D9B1] outline-black '
                  type='submit'
                >
                  Daftar
                </Button>
              </NavLink>

              <NavLink to={"/masuk"}>
                <Button
                  className='bg-[#F6F6F6] outline outline-2 outline-black'
                  type='submit'
                >
                  Masuk
                </Button>
              </NavLink>
            </div>
          ) : (
            <div>
              <div
                className={
                  "py-2 px-4 outline outline-2 outline-black rounded-2xl flex gap-2 items-center"
                }
                onClick={() => setConfigToggle(!configToggle)}
              >
                <p className={"font-poppins font-medium text-md flex"}>
                  {name}
                </p>
                <IoMdArrowDropdown size={24} />
              </div>
            </div>
          )}
          {configToggle ? (
            <ul
              className={
                "text-center flex flex-col gap-2 my-3 font-poppins text-md font-medium"
              }
            >
              <li>
                <NavLink to={"/"}>Pengaturan Akun</NavLink>
              </li>
              <li
                className={"text-red-600 cursor-pointer"}
                onClick={() => handleLogout()}
              >
                Logout
              </li>
            </ul>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
