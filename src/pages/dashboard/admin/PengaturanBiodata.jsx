import React from "react";
import { NavLink} from "react-router-dom";

import { MdOutlineImage } from "react-icons/md";
import ImgProfile from "../../../assets/img/ProfileAdmin.png";

const PengaturanBiodata = () => {
  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <main>
        <div className="relative mx-4 sm:p-6 rounded-sm overflow-hidden">
          <h1 className="font-poppins p-4 rounded-lg text-2xl md:text-3xl shadow-xl font-bold capitalize">
            Pengaturan Akun
          </h1>
        </div>
        <div>
          <ul className="flex mt-7">
            <NavLink
              to="/dashboard/biodata"
              className="flex items-center justify-between group lg:mx-10 mx-5"
              activeClassName="border-b-2 border-black"
            >
              <div className="flex items-center border-b-4 p-2  text-center">
                <span className="font-poppins text-base font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                  Biodata diri
                </span>
              </div>
            </NavLink>
            <NavLink
              to="/dashboard/katasandi"
              className="flex items-center justify-between group"
              activeClassName="border-b-2 border-black"
            >
              <div className="flex items-center">
                <span className="font-poppins text-base font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                  Kata Sandi
                </span>
              </div>
            </NavLink>
          </ul>
        </div>

        <div className="sm:flex justify-center flex-col lg:flex-row mt-10">
          <div className="w-96 flex flex-col items-center p-5">
            <img src={ImgProfile} alt="" />
            <button className="bg-[#343735] font-poppins text-white p-2 w-40 rounded-xl mt-5">
              <a href="" className="flex items-center font-poppins">
                <MdOutlineImage className="w-5 h-5 mr-2" />
                UNGGAH FOTO
              </a>
            </button>
          </div>

          <div className="sm:flex ml-10 p-4 md:flex-col w-5/6">
            <div className="relative sm:p-6 rounded-sm overflow-hidden">
              <div className="font-poppins py-4 px-2 rounded-lg text-xl shadow-xl flex justify-between items-center">
                <h1 className="font-bold">Informasi Data Diri</h1>
                <div>
                  <button className="bg-[#949494] p-2 hidden md:inline-block w-20 rounded-xl mr-2 text-sm">
                    <a href="">Batal</a>
                  </button>
                  <button className="bg-[#154EF9] p-2 hidden md:inline-block w-20 rounded-xl text-sm">
                    <a href="">Simpan</a>
                  </button>
                </div>
              </div>
              <div>
                <form action="" className="flex flex-col gap-3 mt-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nama" className="font-poppins">
                      Nama Lengkap
                    </label>
                    <input type="text" class="rounded border-[#343735]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nama" className="font-poppins">
                      Jenis Kelamin
                    </label>
                    <input type="text" class="rounded border-[#343735]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nama" className="font-poppins">
                      Usia
                    </label>
                    <input type="text" class="rounded border-[#343735]" />
                  </div>
                </form>
              </div>
            </div>

            <div className="relative sm:p-6 rounded-sm overflow-hidden">
              <div className="font-poppins py-4 pl-1 rounded-lg text-xl shadow-xl flex justify-between items-center">
                <h1 className="font-bold">Ubah Kontak</h1>
              </div>
              <div>
                <form action="" className="flex flex-col gap-3 mt-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nama" className="font-poppins">
                      Alamat Email
                    </label>
                    <input type="text" class="rounded border-[#343735]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nama" className="font-poppins">
                      Nomor Kontak
                    </label>
                    <input type="text" class="rounded border-[#343735]" />
                  </div>
                </form>
              </div>
            </div>
            <div className="mt-5">
              <button className="bg-[#949494] p-2 w-20 md:hidden rounded-xl mr-2 text-sm">
                <a href="">Batal</a>
              </button>
              <button className="bg-[#154EF9] p-2 w-20 md:hidden rounded-xl text-sm">
                <a href="">Simpan</a>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PengaturanBiodata;
