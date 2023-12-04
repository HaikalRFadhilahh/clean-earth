import React from "react";
import ImgProfile from "../../../assets/img/Profile.png";
 
const AkunSaya = () => {
  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <main>
        <div className="relative mx-4 sm:p-6 rounded-sm overflow-hidden">
          <h1 className="font-poppins p-4 rounded-lg text-2xl md:text-3xl shadow-xl font-bold capitalize">
            Pengaturan Akun
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center my-4">
          <div>
            <img src={ImgProfile} alt="" />
          </div>
          <div className="text-center font-poppins mt-5">
            <h2 className="font-bold  text-2xl mt-5">Anisa Nur Hasanah</h2>
            <h3 className="font-bold text-sm mt-5">Bekasi, Jawa Barat, Indonesia</h3>
            <p className="mt-5">anisahasanah80@gmail.com</p>
            <p className="mt-5">+62 812-9550-2632</p>
          </div>
          <div className="mt-5 font-poppins">
            <button className="bg-[#B0D9B1] p-2 w-28 rounded-xl"><a href="/profile/pengaturanbiodata">Edit</a></button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AkunSaya;
