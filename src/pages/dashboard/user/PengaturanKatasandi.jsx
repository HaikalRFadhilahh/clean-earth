import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const PengaturanBiodata = () => {
  const location = useLocation();
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
              to="/profile/pengaturanbiodata"
              className="flex items-center justify-between group lg:mx-10 mx-5"
              activeClassName="border-b-2 border-black"
            >
              <div className="flex items-center">
                <span className="font-poppins text-base font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                  Biodata diri
                </span>
              </div>
            </NavLink>
            <NavLink
              to="/profile/pengaturankatasandi"
              className="flex items-center justify-between group"
              activeClassName="border-b-2 border-black"
            >
              <div className="flex items-center border-b-4 p-2 ">
                <span className="font-poppins text-base font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                  Kata Sandi
                </span>
              </div>
            </NavLink>
          </ul>
        </div>

        <div className="ml-10 lg:ml-0 mt-1">
          <div className="flex flex-col p-4 w-5/6">
            <div className="relative sm:p-6 rounded-sm overflow-hidden">
              <div className="font-poppins py-4 px-2 rounded-lg text-xl shadow-xl flex justify-between items-center">
                <h1 className="font-bold">Ubah Kata Sandi</h1>
                <div>
                  <a href="">
                    <button className="bg-[#949494] p-2 hidden lg:inline-block w-20 rounded-xl mr-2 text-sm">
                      Batal
                    </button>
                  </a>
                  <a href="">
                    <button className="bg-[#154EF9] p-2 hidden lg:inline-block w-40 rounded-xl text-sm">
                      Ubah Kata Sandi
                    </button>
                  </a>
                </div>
              </div>
              <div>
                <form action="" className="flex flex-col gap-3 mt-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nama" className="font-poppins">
                      Kata Sandi Lama
                    </label>
                    <input type="text" class="rounded border-[#343735]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nama" className="font-poppins">
                      Kata Sandi Baru
                    </label>
                    <input type="text" class="rounded border-[#343735]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nama" className="font-poppins">
                      Konfirmasi Kata Sandi Baru
                    </label>
                    <input type="text" class="rounded border-[#343735]" />
                  </div>
                </form>
              </div>
              <div className="mt-5">
                <button className="bg-[#949494] p-2 w-20 lg:hidden rounded-xl mr-2 text-sm">
                  <a href="">Batal</a>
                </button>
                <button className="bg-[#154EF9] p-2 w-32 lg:hidden rounded-xl text-sm">
                  <a href="">Ubah Kata Sandi</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PengaturanBiodata;
