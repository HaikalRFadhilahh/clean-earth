import React from "react";
import ImgProfile from "../../../assets/img/ProfileAdmin.png";

const Dashboard = () => {
  return (
    <div className="relative flex flex-col flex-1 overflow-y-hidden overflow-x-hidden">
      <main>
        <div className="relative mx-4 sm:p-6 rounded-sm overflow-hidden">
          <h1 className="font-poppins p-4 rounded-lg text-2xl md:text-3xl bg-[#718977] text-white shadow-xl font-bold capitalize">
            Profil Admin
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center my-2">
          <div>
            <img src={ImgProfile} alt="" />
          </div>
          <div className="text-center font-poppins mt-5">
            <h2 className="font-bold  text-2xl mt-5">Ndaru Windra Sayidinaa</h2>
            <h3 className="font-bold text-sm mt-5">
              Magetan, Jawa Timur, Indonesia
            </h3>
            <p className="mt-5">ndaruw29@gmail.com</p>
            <p className="mt-5">+62 851-5887-1473</p>
          </div>
          <div className="mt-5 font-poppins">
            <a href="/dashboard/biodata">
              <button className="bg-[#B0D9B1] p-2 w-28 rounded-xl">Edit</button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
