import Navbar from "../components/Navbar";
import CardEdukasi from "../components/CardEdukasi";
import apaitusampah from "../assets/edukasi/apa-itu-sampah.png";
import bannerSampah from "../assets/edukasi/banner-edukasi.png";
import Auth from "../middleware/Auth";
import Button from "../components/Button";
import artikel1 from "../assets/edukasi/artikel1.png";
import artikel2 from "../assets/edukasi/artikel2.png";
import artikel3 from "../assets/edukasi/artikel3.png";
import artikel4 from "../assets/edukasi/artikel4.png";
import artikel5 from "../assets/edukasi/artikel5.png";
import artikel6 from "../assets/edukasi/artikel6.png";
import artikel7 from "../assets/edukasi/artikel7.png";
import artikel8 from "../assets/edukasi/artikel8.png";
import Footer from "../components/Footer";

const Edukasipage = () => {
  return (
    <Auth>
      <div>
        <Navbar />
        <div
          style={{
            backgroundImage: `url(${bannerSampah})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
          className=" mx-auto py-16 flex justify-center gap-8 mb-16"
        >
          <div className="w-1/2 py-10 flex flex-col justify-center text-white">
            <div className="px-2 text-center">
              <h1 className="text-4xl font-bold font-poppins">
                Apa yang ingin kamu ketahui ?
              </h1>
              <p className="text-xl font-poppins font-normal my-8">
                Semakin banyak yang kamu ketahui mengenai sampah dan cara
                mengelolanya, maka akan semakin besar juga kesempatanmu untuk
                menyelamatkan bumi ini
              </p>
              <Button className="bg-[#618264] outline-2 outline outline-black'">
                Jelajahi
              </Button>
            </div>
          </div>
        </div>

        <section className="container mx-auto px-3 flex flex-wrap gap-8 text-[#444444]">
          <div className="w-screen flex justify-center">
            <div className="bg-[#B0D9B1] w-1/12 rounded-xl p-1"></div>
          </div>

          <div className="w-screen px-12 flex flex-col justify-between md:flex-row">
            <div className="md:w-3/5">
              <h1 className="text-4xl font-bold font-poppins">
                Apa itu sampah ?
              </h1>
              <p className="text-xl font-poppins font-light my-8 text-justify">
                Secara umum <span className="font-bold">sampah</span> dapat
                diartikan sebagai material sisa dari rumah tangga dan produksi
                industri yang dibuang. Material sisa tersebut dapat berwujud zat{" "}
                <span className="font-bold">padat, cair,</span> hingga{" "}
                <span className="font-bold">gas.</span> Tidak jarang material
                seperti itu adalah bahan utama penyebab pencemaran
                lingkungannya. Sampah dikelompokkan menjadi{" "}
                <span className="font-bold">dua jenis sampah</span> berdasarkan
                sifatnya, yaitu{" "}
                <span className="font-bold">sampah organik</span> (dapat diurai
                atau degradable) dan{" "}
                <span className="font-bold">sampah anorganik</span> (tidak dapat
                diurai atau undegradable).
              </p>
            </div>

            <div className="md:w-1/3 flex justify-center items-center">
              <img
                src={apaitusampah}
                alt="sampah"
                className="bg-center bg-cover rounded-2xl"
              />
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
                <iframe
                  className="w-full aspect-video rounded-xl"
                  src="https://www.youtube.com/embed/i0bb7Et0ots"
                  title="Sejauh Mana Masalah Sampah di Indonesia?"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
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
              Kamu dapat mempraktekkan video tutorial ini. Semuanya mengenai
              cara mendaur ulang sampah nih
              <br />
              Selamat menonton !!!
            </p>
            <div className="flex flex-wrap justify-center items-center mt-16 gap-8">
              <div className="w-3/4 md:w-1/4">
                <iframe
                  className="w-full aspect-video rounded-xl"
                  src="https://www.youtube.com/embed/cjY-9U-YF4o"
                  title="3 Ide Daur Ulang dari Barang Bekas yang Sangat Bermanfaat"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="w-3/4 md:w-1/4">
                <iframe
                  className="w-full aspect-video rounded-xl"
                  src="https://www.youtube.com/embed/EPoDzLTlmyY"
                  title="3 Ide Daur Ulang Sedotan Plastik | Ide Kreatif Sedotan Plastik Bekas"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="w-3/4 md:w-1/4">
                <iframe
                  className="w-full aspect-video rounded-xl"
                  src="https://www.youtube.com/embed/ogE3n_KdYfg?list=PL5aQ2PMwUcmvQrmm9CdS1MWkODBlt7Qmh"
                  title="Ide Kreatif dari Gelas Plastik Bekas  || Ide yang Tak terpikirkan dari Gelas Plastik Minuman"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="w-3/4 md:w-1/4">
                <iframe
                  className="w-full aspect-video rounded-xl"
                  src="https://www.youtube.com/embed/FrxrhaYsVWs"
                  title="Cara membuat Topi Karnaval Dari Kertas Bentuk Kerucut / Hiasan 17 Agustus"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="w-3/4 md:w-1/4">
                <iframe
                  className="w-full aspect-video rounded-xl"
                  src="https://www.youtube.com/embed/MJd3bo_XRaU"
                  title="Daur ulang sampah plastik bungkus snack menjadi tempat pensil || Recycle from plastic snack"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="w-3/4 md:w-1/4">
                <iframe
                  className="w-full aspect-video rounded-xl"
                  src="https://www.youtube.com/embed/yT-ntEUJq40"
                  title="ECOBRICK Sampah Plastik : Apa Itu Ecobric &amp; Cara Membuatnya (Gaya Hidup Berkelanjutan) Projek P5"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="w-screen flex flex-col justify-center">
            <h1 className="text-3xl font-bold font-poppins text-center">
              Ada artikel juga nih, dibaca ya
            </h1>
            <div className="flex flex-wrap justify-center items-center my-16 gap-8">
              <CardEdukasi
                imageSrc={artikel1}
                title="Ancaman Tumpukan Sampah"
                content="Semakin hari tumpukan sampah semakin menggunung nih, yuk simak artikel ini..."
                linkTo="/baca"
              />

              <CardEdukasi
                imageSrc={artikel2}
                title="Jenis - jenis Sampah Plastik"
                content="Ternyata banyak loh jenis-jenis sampah plastik yang mungkin belum kamu tau, yuk simak artikel ini..."
                linkTo="/baca"
              />

              <CardEdukasi
                imageSrc={artikel3}
                title="Masalah Sampah Plastikh"
                content="Ternyata sampah plastik banyak menimbulkan masalah nih, yuk kenali masalah-masalahnya dengan membaca artikel ini..."
                linkTo="/baca"
              />

              <CardEdukasi
                imageSrc={artikel4}
                title="Sampah Plastik Tak Terkendali"
                content="Semakin hari sampah plastik semakin tak bisa dikendalikan lagi, yuk coba baca artikel ini..."
                linkTo="/baca"
              />

              <CardEdukasi
                imageSrc={artikel5}
                title="Sampah Plastik Cemari Sungai"
                content="Ternyata banyak loh sungai yang sudah tercemari sampah - sampah plastik, coba yuk simak artikel ini..."
                linkTo="/baca"
              />

              <CardEdukasi
                imageSrc={artikel6}
                title="Pengelolaan Sampah itu Penting"
                content="Edukasi mengenai pengelolaan sampah itu penting banget loh, kamu harus tau ya. Yuk baca artikel ini..."
                linkTo="/baca"
              />

              <CardEdukasi
                imageSrc={artikel7}
                title="Manfaat Daur Ulang Sampah"
                content="Sampah juga bisa dimanfaatkan loh, yuk coba disimak penjelasan pada artikel dibawah ini..."
                linkTo="/baca"
              />

              <CardEdukasi
                imageSrc={artikel8}
                title="Masalah Sampah Pada Pariwisata"
                content="Sampah tidak hanya mengganggu lingkungan sekitar, namun sudah menganggu bidang pariwisata juga nih, yuk disimak..."
                linkTo="/baca"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </Auth>
  );
};

export default Edukasipage;
