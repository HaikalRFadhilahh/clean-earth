import Navbar from "../components/Navbar";
import Auth from "../middleware/Auth";
import banner from "../assets/artikel/banner.png";
import img1 from "../assets/artikel/img-1.png";
import Footer from "../components/Footer";

const BacaArtikel = () => {
  return (
    <Auth>
      <div className={"w-full overflow-x-hidden"}>
        <Navbar />
        <div
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
          className=' mx-auto py-16 flex justify-center gap-8 mb-16'
        >
          <div className='md:w-1/2 py-32 flex flex-col justify-center text-white'>
            <div className='px-8 text-center'>
              <h1 className='text-3xl md:text-4xl font-bold font-poppins'>
                Ancaman Masalah Sampah
              </h1>
            </div>
          </div>
        </div>

        <section className='container mx-auto px-3 flex flex-wrap gap-8 text-[#444444]'>
          <div className='w-screen flex justify-center'>
            <div className='bg-[#B0D9B1] w-1/12 rounded-xl p-1'></div>
          </div>

          <div className='w-screen py-16 flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold font-poppins text-center'>
              Ancaman Penumpukan Sampah di Indonesia dan Sumbernya
            </h1>
            <p className='text-xl font-poppins font-light my-8 text-justify'>
              Jakarta, 10 November 2023 - Penumpukan sampah menjadi ancaman serius bagi lingkungan di Indonesia. Berdasarkan data dari Kementerian Lingkungan Hidup dan Kehutanan, jumlah sampah yang dihasilkan di Indonesia mencapai 64 juta ton per tahun. Fenomena ini telah menimbulkan berbagai dampak negatif terhadap ekosistem dan kesehatan masyarakat.
              <br />
              <br />
              Peningkatan populasi dan urbanisasi yang pesat juga turut berkontribusi pada penumpukan sampah. Kota-kota besar seperti Jakarta, Surabaya, dan Bandung menghadapi tantangan besar dalam mengelola sampah yang terus bertambah setiap harinya. Kurangnya lahan untuk pembuangan sampah dan terbatasnya fasilitas daur ulang menjadi kendala utama dalam mengatasi masalah ini. Selain itu, industri juga berperan dalam penumpukan sampah di Indonesia. Beberapa sektor industri masih menggunakan bahan-bahan yang sulit terurai dan menghasilkan limbah berbahaya. Ketika limbah ini tidak dikelola dengan baik, maka akan berdampak negatif pada lingkungan sekitar.
            </p>

            <div className='w-3/4 md:w-1/2 flex justify-center items-center'>
              <img
                src={img1}
                alt='sampah'
                className='bg-center bg-cover rounded-2xl'
              />
            </div>

            <p className='text-xl font-poppins font-light my-8 text-justify'>
               Peningkatan populasi dan urbanisasi yang pesat juga turut berkontribusi pada penumpukan sampah. Kota-kota besar seperti Jakarta, Surabaya, dan Bandung menghadapi tantangan besar dalam mengelola sampah yang terus bertambah setiap harinya. Kurangnya lahan untuk pembuangan sampah dan terbatasnya fasilitas daur ulang menjadi kendala utama dalam mengatasi masalah ini.
               Selain itu, industri juga berperan dalam penumpukan sampah di Indonesia. Beberapa sektor industri masih menggunakan bahan-bahan yang sulit terurai dan menghasilkan limbah berbahaya. Ketika limbah ini tidak dikelola dengan baik, maka akan berdampak negatif pada lingkungan sekitar.
              <br />
              <br />
              Pemerintah Indonesia telah melakukan berbagai upaya untuk mengatasi masalah penumpukan sampah ini. Program-program pengelolaan sampah seperti pengurangan, daur ulang, dan pemulihan energi telah diterapkan. Namun, upaya ini masih perlu ditingkatkan untuk mengatasi masalah yang lebih kompleks.
              <br />
              <br />
              Sumber: <br />
               1. Kementerian Lingkungan Hidup dan Kehutanan - www.menlhk.go.id <br />
               2. Badan Pusat Statistik Indonesia - www.bps.go.id <br />
               3. BeritaSatu.com - www.beritasatu.com <br />
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </Auth>
  )
}

export default BacaArtikel