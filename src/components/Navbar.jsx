import { useState } from "react";
import Logo from "../assets/Logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className='bg-white w-screen'>
      <div className='flex items-center justify-between md:px-3 lg:px-7'>
        <div className='z-50 p-5 md:w-auto w-full flex justify-between '>
          <div className='flex'>
            <img src={Logo} alt='logo' className='md:cursor-pointer h-9' />
            <h1 className='pt-1 pl-2 font-bold text-xl'>CleanEarth</h1>
          </div>
          <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
            <IoMdMenu name={`${open ? "close" : "menu"}`} />
          </div>
        </div>
        {/* Navigation For Desktop */}
        <ul
          className={"hidden md:flex gap-7 font-light font-poppins text-base"}
        >
          <li><a href="/">Beranda</a></li>
          <li><a href="/edukasi">Edukasi</a></li>
          <li>Komunitas</li>
        </ul>
        <div className={"hidden md:flex gap-3"}>
          <Button
            className='outline outline-2 bg-[#B0D9B1] outline-black '
            type='submit'
          >
            <NavLink to="daftar">Daftar</NavLink>
          </Button>
          <Button
            className='bg-[#F6F6F6] outline outline-2 outline-black'
            type='submit'
          >
            <NavLink to="masuk">Masuk</NavLink>
          </Button>
        </div>

        {/* Mobile navbar */}
        <ul
          className={`md:hidden flex flex-col items-center  bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li>
            <NavLink to='/' className='py-7 px-3 inline-block font-medium  '>
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink to='/' className='py-7 px-3 inline-block font-medium'>
              Edukasi
            </NavLink>
          </li>
          <li>
            <NavLink to='/' className='py-7 px-3 inline-block font-medium'>
              Komunitas
            </NavLink>
          </li>
          <div className={"flex md:hidden gap-3 py-3"}>
            <Button
              className='outline outline-2 bg-[#B0D9B1] outline-black '
              type='submit'
            >
              Daftar
            </Button>
            <Button
              className='bg-[#F6F6F6] outline outline-2 outline-black'
              type='submit'
            >
              Masuk
            </Button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
