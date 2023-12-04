import Navbar from "../components/Navbar";
import BackgroundComunity from "../assets/img/BackgroundComunity.png";
import Chat from "../components/Chat";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import peopleKomunitas1 from "../assets/img/peopleKomunitas1.png";
import peopleKomunitas2 from "../assets/img/peopleKomunitas2.png";
import peopleKomunitas3 from "../assets/img/peopleKomunitas3.png";
import peopleKomunitas4 from "../assets/img/peopleKomunitas4.png";
import axios from "axios";
import { useRecoilState } from "recoil";
import { token } from "../store";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Loading from "../components/Loading";

const Komunitaspage = () => {
  const [ulasan, setUlasan] = useState({ bintang: 0 });
  const [tokenJWT, setTokenJWT] = useRecoilState(token);
  const [loading, setLoading] = useState(false);

  const handleSubmitUlasan = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (ulasan.bintang == 0) {
      setLoading(false);
      withReactContent(Swal).fire({
        icon: "error",
        title: "Gagal",
        text: "Harap Isi Bintang Terlebih Dahulu!",
      });
    } else {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_SERVICE}/ulasan/create`,
          {
            bintang: ulasan.bintang,
            komentar: ulasan.ulasan,
          },
          {
            headers: {
              Authorization: tokenJWT,
              Accept: "application/json",
              "Content-Type": "application/json;charset=UTF-8",
            },
          }
        );
        setLoading(false);
        withReactContent(Swal).fire({
          icon: "success",
          title: "Berhasil",
          text: "Berhasil Menambahkan Ulasan,Terima Kasih Telah Mengisi Ulasan!",
        });
        setUlasan({ ...ulasan, bintang: 0, ulasan: null });
      } catch (error) {
        setLoading(false);
        if (error.response.status == 409) {
          withReactContent(Swal).fire({
            icon: "error",
            title: "Gagal",
            text: error.response.data.message,
          });
        } else if (error.response.status == 400) {
          withReactContent(Swal).fire({
            icon: "error",
            title: "Gagal",
            text: error.response.data.message[0].message,
          });
        } else {
          withReactContent(Swal).fire({
            icon: "error",
            title: "Gagal",
            text: "Internal Server Error",
          });
        }
      }
    }
  };
  return (
    <div className={"overflow-x-hidden relative"}>
      <Loading show={loading} />
      <Navbar theme='transparent' />
      {/* Banner Section Start */}
      <section
        className={
          "w-screen overflow-x-hidden h-[80vh] md:h-[70vh] lg:h-[80vh] bg-slate-900 relative"
        }
      >
        <img
          src={BackgroundComunity}
          alt=''
          className={"object-cover bg-center w-full h-full"}
        />
        <div
          className={
            "text-center w-full md:w-3/4 text-white z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3"
          }
        >
          <h2 className={"font-poppins text-3xl md:text-5xl font-semibold"}>
            Gabung yuk di komunitas kami
          </h2>
          <p className={"w-4/5 md:w-3/4 font-poppins font-md md:text-lg"}>
            Disini kamu bisa bertemu dengan orang-orang hebat yang bisa kamu
            ajak untuk bertukar informasi mengenai segala hal tentang
            Pengelolaan Sampah
          </p>
        </div>
      </section>
      {/* Banner Section End */}
      {/* Chatting Section Start */}
      <section className={"w-screen overflow-x-hidden md:-translate-y-24"}>
        <div className='container mx-auto h-fit flex justify-center px-2 my-2'>
          <div
            className={
              "w-full max-w-6xl rounded-md contrast-150 px-2 py-3 md:py-4 md:px-3 bg-gradient-to-b from-[#A1B4AC] via-[#A1B4AC] to-white md:opacity-[0.93]"
            }
          >
            <Chat
              reverse={true}
              message='Hallo Apa Kabar Kalian'
              img={peopleKomunitas1}
            />
            <Chat message='Baik Aja' img={peopleKomunitas2} />
            <Chat
              message='Baik nih, mau nanya dong tentang pembuatan daur ulang yang mudah dibuat. Apa aja ya kira-kira?'
              img={peopleKomunitas3}
            />
            <Chat
              reverse={true}
              message='Aku suh biasanya buat pot dari botol bekas'
              img={peopleKomunitas4}
            />
            <Chat
              reverse={true}
              message='Atau ubah botol bekas jadi tempat pensil juga bisa'
              img={peopleKomunitas4}
            />
            <button
              className={
                "mx-auto flex outline outline-1 outline-black px-4 py-2 rounded-md bg-[#B0D9B1] text-poppins text-black "
              }
            >
              Gabung Yuk
            </button>
          </div>
        </div>
      </section>
      {/* Chatting Section End */}
      {/* Form Rating Start */}
      <section className={"w-screen overflow-x-hidden py-4 px-2 md:py-5"}>
        <div className='container mx-auto flex flex-col gap-5'>
          <h3
            className={
              "font-poppins text-center font-semibold text-xl my-1 md:text-left w-full md:text-2xl"
            }
          >
            Berikan Rating Pada Kami
          </h3>
          <form
            action='
          '
            onSubmit={handleSubmitUlasan}
          >
            <div
              className={
                "w-1/2 h-1 bg-[#B0D9B1] mx-auto rounded-sm md:ml-0 md:w-[200px] mb-4"
              }
            ></div>
            <div
              className={
                "w-full md:w-4/5 mx-auto px-4 py-2 flex justify-between"
              }
            >
              <FaStar
                size={40}
                className={"cursor-pointer"}
                onClick={() => setUlasan({ ...ulasan, bintang: 1 })}
                fill={ulasan.bintang >= 1 ? "#FFE382" : "#B6BBC4"}
              />
              <FaStar
                size={40}
                className={"cursor-pointer"}
                onClick={() => setUlasan({ ...ulasan, bintang: 2 })}
                fill={ulasan.bintang >= 2 ? "#FFE382" : "#B6BBC4"}
              />
              <FaStar
                size={40}
                className={"cursor-pointer"}
                onClick={() => setUlasan({ ...ulasan, bintang: 3 })}
                fill={ulasan.bintang >= 3 ? "#FFE382" : "#B6BBC4"}
              />
              <FaStar
                size={40}
                className={"cursor-pointer"}
                onClick={() => setUlasan({ ...ulasan, bintang: 4 })}
                fill={ulasan.bintang >= 4 ? "#FFE382" : "#B6BBC4"}
              />
              <FaStar
                size={40}
                className={"cursor-pointer"}
                onClick={() => setUlasan({ ...ulasan, bintang: 5 })}
                fill={ulasan.bintang >= 5 ? "#FFE382" : "#B6BBC4"}
              />
            </div>
            <p
              className={
                "font-poppins text-sm md:text-base font-semibold my-2 "
              }
            >
              Ceritakan pengalaman kamu selama bergabung di komunitas kami ya!
            </p>
            <input
              type='text'
              className={
                "px-2 py-2 w-full outline outline-1 outline-black placeholder:font-poppins placeholder:text-sm rounded-md font-poppins"
              }
              placeholder={"Ceritakan Pengalaman Kamu!"}
              onChange={(e) => {
                setUlasan({ ...ulasan, ulasan: e.target.value });
              }}
              required={true}
            />
            <Button
              className={`font-poppins text-sm py-2 px-3 bg-[#B0D9B1] outline outline-1 outline-black my-3 mx-auto flex font-semibold`}
              type='submit'
            >
              Kirim
            </Button>
          </form>
        </div>
      </section>
      {/* Form Rating End */}
      {/* Ulasan Anggota Komunitas Start */}
      <section className={"w-screen overflow-x-hidden pt-3 pb-5"}>
        <div className='container mx-auto py-5 px-2 flex gap-4 whitespace-nowrap overflow-x-auto'>
          <div
            className={
              "w-3/5 max-w-xs bg-[#B0D9B1] rounded-md aspect-[5/6] flex flex-shrink-0 px-3 flex-col justify-center items-center gap-4 outline outline-3 outline-black"
            }
          >
            <h4
              className={
                "font-lexend font-bold text-3xl w-3/4 whitespace-normal"
              }
            >
              Ulasan Anggota Komunitas
            </h4>
            <div className={"w-3/4 h-[2px] bg-[#346654]"}></div>
          </div>

          <div
            className={
              "w-3/5 max-w-xs bg-[#F5F7F8] rounded-md aspect-[5/6] flex flex-shrink-0 px-4 flex-col gap-4 md:gap-6 py-6 md:px-6 md:py-7 whitespace-normal"
            }
          >
            <div className={"flex gap-3 items-center"}>
              <img
                src={peopleKomunitas3}
                alt='User Images'
                className={"w-10 object-fill bg-center bg-red-300 rounded-full"}
              />
              <p className={"font-lexend text-base"}>Haikal R Fadhilah</p>
            </div>
            <div className={"w-full h-[1px] bg-black"}></div>
            <div className={"flex gap-2"}>
              <FaStar size={20} fill={"#FFE382"} />
              <FaStar size={20} fill={"#FFE382"} />
              <FaStar size={20} fill={"#FFE382"} />
              <FaStar size={20} fill={"#FFE382"} />
              <FaStar size={20} fill={"#FFE382"} />
            </div>
            <p className={"font-lexend font-medium font-base"}>
              Seruuuu ada fitur komunitas kayak gini. Bikin aku tambah semangat
              ngelola sampahku :)
            </p>
            <small
              className={
                "ml-auto text-slate-400 font-lexend font-light text-sm"
              }
            >
              17 September 2023
            </small>
          </div>
        </div>
      </section>
      {/* Ulasan Anggota Komunitas End */}
      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </div>
  );
};

export default Komunitaspage;
