import React from "react";
import LogoWelcomebanner from "../assets/LogoWelcomebanner.png";

const WelcomeBanner = () => {
  return (
    <div className='"w-full h-screen flex justify-center items-center"'>
      <div className="grid grid-cols-2 w-full h-[35rem]">
        <div className=" flex flex-col px-16 justify-center">
          <h1 className="font-bold text-5xl mb-11 ">
            Hai, Selamat Datang !
          </h1>
          <p className="w-full text-xl">
            CleanEarth merupakan solusi dari permasalahan sampah anda. Yuk
            gabung bersama komunitas kami untuk membuat perubahan positif dalam
            menjaga bumi kita tetap hijau dan sehat{" "}
          </p>
          <div className="mt-10">
            <button className="px-6 py-2 rounded-lg text-white bg-green-800 border-2 font-bold border-black">
              Gabung Yuk
            </button>
          </div>
        </div>
        <div className="">
          <div className="flex justify-end pt-5 pr-7">
            <div className=" bg-green-300 rounded-full mt-3 w-[30rem] h-[30rem]">
              <img src={LogoWelcomebanner} alt="Logo" className="w-[28rem]" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
