import Navbar from "../components/Navbar";
import LogoWelcomebanner from "../assets/LogoWelcomebanner.png";
import Button from "../components/Button";

import { FaCircle } from "react-icons/fa";
import iconedukasi from "../assets/Iconedukasi.png";
import iconkomunitas from "../assets/Iconkomunitas.png";
import galeri1 from "../assets/Prosespembuatan1.jpg";
import galeri2 from "../assets/Prosespembuatan2.jpg";
import galeri3 from "../assets/Prosespembuatan3.jpg";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-3 md:px-0 flex flex-wrap">
        {/* Block For Text Banner Section */}
        <div
          className={
            "w-screen h-fit md:min-h-[calc(100vh-50vh)]  lg:min-h-[calc(100vh-80px)] md:w-1/2 py-10 flex flex-wrap gap-3 items-center justify-center lg:px-4 lg:py-0"
          }
        >
          <div className={"px-2 md:px-6"}>
            <h2
              className={
                "text-3xl font-bold font-poppins text-left lg:text-5xl"
              }
            >
              Hai,Selamat Datang !
            </h2>
            <p
              className={
                "text-base font-poppins font-normal my-4 lg:my-8 lg:text-lg"
              }
            >
              CleanEarth merupakan solusi dari permasalahan sampah anda. Yuk
              gabung bersama komunitas kami untuk membuat perubahan positif
              dalam menjaga bumi kita tetap hijau dan sehat{" "}
            </p>
            <Button
              type="submit"
              className="bg-[#618264] outline-2 text-white outline outline-black"
            >
              Gabung Yuk
            </Button>
          </div>
        </div>
        {/* Block Code Of Image Banner  */}
        <div
          className={
            "w-screen md:min-h-[calc(100vh-50vh)] lg:min-h-[calc(100vh-80px)] md:w-1/2 flex justify-center items-center"
          }
        >
          <div
            className={
              "w-4/5 md:w-2/3 lg:w-4/6 aspect-square bg-gradient-to-b from-[#D0E7D2] to-transparent rounded-full p-4"
            }
          >
            <img
              src={LogoWelcomebanner}
              alt=""
              className={"bg-center bg-cover"}
            />
          </div>
        </div>
      </div>

      <div className="h-[50vh] ">
        <div className="justify-center flex flex-col items-center">
          <h1 className="font-poppins text-2xl font-medium">Tentang Kami</h1>
          <div className="flex mt-2">
            <FaCircle className="w-3 mr-2" style={{ color: "green" }} />
            <FaCircle className="w-3" style={{ color: "green" }} />
            <FaCircle className="w-3 ml-2" style={{ color: "green" }} />
          </div>
        </div>
        <div className="flex justify-center border-2 rounded-md shadow-xl h-52 mx-10 mt-10 pt-7">
          <div className="w-7/12 text-center text-lg ">
            <p className="font-poppins">
              "Clean Earth" merupakan sumber daya online yang bertujuan membantu
              masyarakat untuk lebih peduli dengan lingkungan sekitar. Salah
              satu usaha dalam menjaga lingkungan yakni melakukan pengelolaan
              sampah dengan baik. Website ini menyediakan berbagai fitur dan
              sumber daya untuk membantu pengguna mengatasi masalah penumpukan
              sampah dan mencapai lingkungan yang lebih bersih dan sehat.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-14 h-[70vh]  ">
        <div className="justify-center flex flex-col items-center">
          <h1 className="font-poppins text-2xl font-medium">Fitur Utama</h1>
          <div className="flex mt-2">
            <FaCircle className="w-3 mr-2" style={{ color: "green" }} />
            <FaCircle className="w-3" style={{ color: "green" }} />
            <FaCircle className="w-3 ml-2" style={{ color: "green" }} />
          </div>
        </div>
        <div className="flex justify-center mt-14 h-screen">
          <div className="w-56 h-80 border-2 rounded-md shadow-xl mr-10 p-2">
            <div className="flex flex-col justify-center items-center">
              <img src={iconedukasi} alt="" className="w-28" />
              <h3 className="font-poppins text-xl font-bold mt-5">EDUKASI</h3>
              <p className="text-center font-poppins mt-5">
                Menampilkan segala informasi mengenai pengelolaan sampah
              </p>
            </div>
          </div>
          <div className="w-56 h-80 border-2 rounded-md shadow-xl ml-10 p-2">
            <div className="flex flex-col justify-center items-center">
              <img src={iconkomunitas} alt="" />
              <h3 className="font-poppins text-xl font-bold mt-5">EDUKASI</h3>
              <p className=" text-center font-poppins mt-5">
                kamu bisa berinteraksi dan berbagi pengalaman terkait dengan
                pengelolaan sampah
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <div className="justify-center flex flex-col items-center">
          <h1 className="font-poppins text-2xl font-medium">Galeri Kami</h1>
          <div className="flex mt-2">
            <FaCircle className="w-3 mr-2" style={{ color: "green" }} />
            <FaCircle className="w-3" style={{ color: "green" }} />
            <FaCircle className="w-3 ml-2" style={{ color: "green" }} />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-10 mx-10 h-80">
          <div>
            <img src={galeri1} alt="" className="rounded-lg" />
          </div>
          <div>
            <img src={galeri2} alt="" className="rounded-lg h-[14.5rem]"/>
          </div>
          <div>
            <img src={galeri3} alt="" className="rounded-lg" />
          </div>
          <div>
            <img src={galeri1} alt="" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
