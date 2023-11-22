import Navbar from "../components/Navbar";
import LogoWelcomebanner from "../assets/img/LogoWelcomebanner.png";
import Button from "../components/Button";

const Homepage = () => {
  return (
    <div className={"overflow-x-hidden"}>
      <Navbar />
      <section className='container mx-auto px-3 md:px-0 flex flex-wrap'>
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
              type='submit'
              className='bg-[#618264] outline-2 text-white outline outline-black'
            >
              Gabung Yuk
            </Button>
          </div>
        </div>
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
              alt=''
              className={"bg-center bg-cover"}
            />
          </div>
        </div>
      </section>
      {/* Block Code Of Image Banner  */}
      {/* Block Code Of  Tentang Kami Start*/}
      <section
        className={
          "container mx-auto h-fit overflow-x-hidden flex flex-col py-10 lg:py-3 mg:px-10 lg:px-20 px-5"
        }
      >
        <h2 className={"font-poppins text-2xl text-center font-semibold"}>
          Tentang Kami
        </h2>
        <ul className={"flex gap-x-4 mx-auto my-4"}>
          <li className={"w-3 aspect-square rounded-full bg-[#79AC78]"}></li>
          <li className={"w-3 aspect-square rounded-full bg-[#79AC78]"}></li>
          <li className={"w-3 aspect-square rounded-full bg-[#79AC78]"}></li>
        </ul>
        <div
          className={
            "container mx-auto bg-[#F9F8F8] my-2 lg:py-10 lg:px-16 rounded-lg shadow-lg h-fit py-3 px-2"
          }
        >
          <p className={"text-center font-poppins text-base"}>
            &quot;Clean Earth&quot; merupakan sumber daya online yang bertujuan
            membantu masyarakat untuk lebih peduli dengan lingkungan sekitar.
            Salah satu usaha dalam menjaga lingkungan yakni melakukan
            pengelolaan sampah dengan baik. Website ini menyediakan berbagai
            fitur dan sumber daya untuk membantu pengguna mengatasi masalah
            penumpukan sampah dan mencapai lingkungan yang lebih bersih dan
            sehat.
          </p>
        </div>
      </section>
      {/* Block Code Of  Tentang Kami End*/}
      {/* Footer Start */}
      <section className={"mt-20"}></section>
      {/* Footer End */}
    </div>
  );
};

export default Homepage;
