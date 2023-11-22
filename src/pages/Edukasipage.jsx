import Navbar from "../components/Navbar";
import apaitusampah from "../assets/edukasi/apa-itu-sampah.png";
import coverMasalahSampah from "../assets/edukasi/cover-edukasi-masalah-sampah.png";
import bannerSampah from "../assets/edukasi/banner-edukasi.png";
import Button from "../components/Button";

const Edukasipage = () => {
  return (
    <div>
      <Navbar />
      <div style={{ backgroundImage: `url(${bannerSampah})`, backgroundSize: 'cover', backgroundPosition: 'bottom'}} className=" mx-auto py-16 flex justify-center gap-8 mb-16">
         <div  div className="w-1/2 py-10 flex flex-col justify-center text-white">
            <div className="px-2 text-center">
               <h1 className="text-4xl font-bold font-poppins">
                  Apa yang ingin kamu ketahui ?
               </h1>
               <p className="text-xl font-poppins font-normal my-8">
                  Semakin banyak yang kamu ketahui mengenai sampah dan cara mengelolanya, maka akan semakin besar juga kesempatanmu untuk menyelamatkan bumi ini
               </p>
               <Button className="bg-[#618264] outline-2 outline outline-black'">
                  Jelajahi
               </Button>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-3 flex flex-wrap gap-8">

         <div className="w-screen flex justify-center">
            <div className="bg-[#B0D9B1] w-1/12 rounded-xl p-1"></div>
         </div>

         <div className="w-screen px-12 flex flex-col justify-between md:flex-row">
            <div className="md:w-3/5">
               <h1 className="text-4xl font-bold font-poppins">
                  Apa itu sampah ?
               </h1>
               <p className="text-xl font-poppins font-light my-8 text-justify">
                  Secara umum <span className="font-bold">sampah</span> dapat diartikan sebagai material sisa dari rumah tangga dan produksi industri yang dibuang. Material sisa tersebut dapat berwujud zat <span className="font-bold">padat, cair,</span> hingga <span className="font-bold">gas.</span> Tidak jarang material seperti itu adalah bahan utama penyebab pencemaran lingkungannya. Sampah dikelompokkan menjadi <span className="font-bold">dua jenis sampah</span> berdasarkan sifatnya, yaitu <span className="font-bold">sampah organik</span> (dapat diurai atau degradable) dan <span className="font-bold">sampah anorganik</span> (tidak dapat diurai atau undegradable).
               </p>
            </div>

            <div className="md:w-1/3 flex justify-center items-center">
               <img src={apaitusampah} alt="sampah" className="bg-center bg-cover rounded-2xl" />
            </div>
         </div>

         <div className="w-screen py-16 flex flex-col justify-center">
            <h1 className="text-3xl font-bold font-poppins text-center">
               Sudah sejauh mana sih permasalahan sampah di Indonesia ?
            </h1>
            <div className="flex justify-center">
               <div className="bg-[#C6C6C6] w-3/5 rounded-xl pt-0.5 mt-2"></div>
            </div>
            <div className="flex justify-center items-center mt-16">
               <div className="w-3/4 md:w-1/2 flex justify-center">
                  <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/i0bb7Et0ots" title="Sejauh Mana Masalah Sampah di Indonesia?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               </div>
            </div>
         </div>

         <div className="w-screen flex justify-center">
            <div className="bg-[#B0D9B1] w-1/12 rounded-xl p-1"></div>
         </div>

         <div className="w-screen py-16 flex flex-col justify-center">
            <h1 className="text-3xl font-bold font-poppins text-center">
               Kamu mau tonton video yang mana ?
            </h1>
            <p className="text-xl font-poppins font-light text-center my-8">
            Kamu dapat mempraktekkan video tutorial ini. Semuanya mengenai cara mendaur ulang sampah nih
            <br/>Selamat menonton !!!
            </p>
            <div className="flex flex-wrap justify-center items-center mt-16 gap-8">
               <div className="w-3/4 md:w-1/4">
                  <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/cjY-9U-YF4o" title="3 Ide Daur Ulang dari Barang Bekas yang Sangat Bermanfaat" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               </div>
               <div className="w-3/4 md:w-1/4">
                  <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/EPoDzLTlmyY" title="3 Ide Daur Ulang Sedotan Plastik | Ide Kreatif Sedotan Plastik Bekas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               </div>
               <div className="w-3/4 md:w-1/4">
                  <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/ogE3n_KdYfg?list=PL5aQ2PMwUcmvQrmm9CdS1MWkODBlt7Qmh" title="Ide Kreatif dari Gelas Plastik Bekas  || Ide yang Tak terpikirkan dari Gelas Plastik Minuman" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               </div>
               <div className="w-3/4 md:w-1/4">
                  <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/FrxrhaYsVWs" title="Cara membuat Topi Karnaval Dari Kertas Bentuk Kerucut / Hiasan 17 Agustus" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               </div>
               <div className="w-3/4 md:w-1/4">
                  <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/MJd3bo_XRaU" title="Daur ulang sampah plastik bungkus snack menjadi tempat pensil || Recycle from plastic snack" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               </div>
               <div className="w-3/4 md:w-1/4">
                  <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/yT-ntEUJq40" title="ECOBRICK Sampah Plastik : Apa Itu Ecobric &amp; Cara Membuatnya (Gaya Hidup Berkelanjutan) Projek P5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               </div>
            </div>
         </div>

         <div className="w-screen flex flex-col justify-center">
            <h1 className="text-3xl font-bold font-poppins text-center">
            Ada artikel juga nih, dibaca ya 
            </h1>
            <div className="flex flex-wrap justify-center items-center mt-16 gap-8">
               
               <div className="flex flex-col text-center w-80 h-96 shadow-xl rounded-2xl">
                  <div className="flex flex-col text-center gap-2 p-2">
                     <img src={coverMasalahSampah} alt="sampah" className="bg-center bg-cover rounded-2xl" />
                     <h2 className="text-md font-bold font-poppins">
                        Ancaman Tumpukan Sampah
                     </h2>
                     <p>
                        Semakin hari tumpukan sampah semakin menggunung nih, yuk simak artikel ini...
                     </p>
                  </div>
                  <div className="p-2 block mt-auto bg-[#B0D9B1] rounded-b-2xl">
                     <h3>
                        BACA SELENGKANYA
                     </h3>
                  </div>
               </div>
               
               <div className="flex flex-col text-center w-80 h-96 shadow-xl rounded-2xl">
                  <div className="flex flex-col text-center gap-2 p-2">
                     <img src={coverMasalahSampah} alt="sampah" className="bg-center bg-cover rounded-2xl" />
                     <h2 className="text-md font-bold font-poppins">
                        Ancaman Tumpukan Sampah
                     </h2>
                     <p>
                        Semakin hari tumpukan sampah semakin menggunung nih, yuk simak artikel ini...
                     </p>
                  </div>
                  <div className="p-2 block mt-auto bg-[#B0D9B1] rounded-b-2xl">
                     <h3>
                        BACA SELENGKANYA
                     </h3>
                  </div>
               </div>
               
               <div className="flex flex-col text-center w-80 h-96 shadow-xl rounded-2xl">
                  <div className="flex flex-col text-center gap-2 p-2">
                     <img src={coverMasalahSampah} alt="sampah" className="bg-center bg-cover rounded-2xl" />
                     <h2 className="text-md font-bold font-poppins">
                        Ancaman Tumpukan Sampah
                     </h2>
                     <p>
                        Semakin hari tumpukan sampah semakin menggunung nih, yuk simak artikel ini...
                     </p>
                  </div>
                  <div className="p-2 block mt-auto bg-[#B0D9B1] rounded-b-2xl">
                     <h3>
                        BACA SELENGKANYA
                     </h3>
                  </div>
               </div>
               
               <div className="flex flex-col text-center w-80 h-96 shadow-xl rounded-2xl">
                  <div className="flex flex-col text-center gap-2 p-2">
                     <img src={coverMasalahSampah} alt="sampah" className="bg-center bg-cover rounded-2xl" />
                     <h2 className="text-md font-bold font-poppins">
                        Ancaman Tumpukan Sampah
                     </h2>
                     <p>
                        Semakin hari tumpukan sampah semakin menggunung nih, yuk simak artikel ini...
                     </p>
                  </div>
                  <div className="p-2 block mt-auto bg-[#B0D9B1] rounded-b-2xl">
                     <h3>
                        BACA SELENGKANYA
                     </h3>
                  </div>
               </div>
               
               <div className="flex flex-col text-center w-80 h-96 shadow-xl rounded-2xl">
                  <div className="flex flex-col text-center gap-2 p-2">
                     <img src={coverMasalahSampah} alt="sampah" className="bg-center bg-cover rounded-2xl" />
                     <h2 className="text-md font-bold font-poppins">
                        Ancaman Tumpukan Sampah
                     </h2>
                     <p>
                        Semakin hari tumpukan sampah semakin menggunung nih, yuk simak artikel ini...
                     </p>
                  </div>
                  <div className="p-2 block mt-auto bg-[#B0D9B1] rounded-b-2xl">
                     <h3>
                        BACA SELENGKANYA
                     </h3>
                  </div>
               </div>
               
               <div className="flex flex-col text-center w-80 h-96 shadow-xl rounded-2xl">
                  <div className="flex flex-col text-center gap-2 p-2">
                     <img src={coverMasalahSampah} alt="sampah" className="bg-center bg-cover rounded-2xl" />
                     <h2 className="text-md font-bold font-poppins">
                        Ancaman Tumpukan Sampah
                     </h2>
                     <p>
                        Semakin hari tumpukan sampah semakin menggunung nih, yuk simak artikel ini...
                     </p>
                  </div>
                  <div className="p-2 block mt-auto bg-[#B0D9B1] rounded-b-2xl">
                     <h3>
                        BACA SELENGKANYA
                     </h3>
                  </div>
               </div>
               
               <div className="flex flex-col text-center w-80 h-96 shadow-xl rounded-2xl">
                  <div className="flex flex-col text-center gap-2 p-2">
                     <img src={coverMasalahSampah} alt="sampah" className="bg-center bg-cover rounded-2xl" />
                     <h2 className="text-md font-bold font-poppins">
                        Ancaman Tumpukan Sampah
                     </h2>
                     <p>
                        Semakin hari tumpukan sampah semakin menggunung nih, yuk simak artikel ini...
                     </p>
                  </div>
                  <div className="p-2 block mt-auto bg-[#B0D9B1] rounded-b-2xl">
                     <h3>
                        BACA SELENGKANYA
                     </h3>
                  </div>
               </div>
               
               <div className="flex flex-col text-center w-80 h-96 shadow-xl rounded-2xl">
                  <div className="flex flex-col text-center gap-2 p-2">
                     <img src={coverMasalahSampah} alt="sampah" className="bg-center bg-cover rounded-2xl" />
                     <h2 className="text-md font-bold font-poppins">
                        Ancaman Tumpukan Sampah
                     </h2>
                     <p>
                        Semakin hari tumpukan sampah semakin menggunung nih, yuk simak artikel ini...
                     </p>
                  </div>
                  <div className="p-2 block mt-auto bg-[#B0D9B1] rounded-b-2xl">
                     <h3>
                        BACA SELENGKANYA
                     </h3>
                  </div>
               </div>

            </div>
         </div>

      </div>
    </div>
  )
}

export default Edukasipage