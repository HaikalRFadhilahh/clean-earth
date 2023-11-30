import Navbar from "../components/Navbar";
import BackgroundComunity from "../assets/img/BackgroundComunity.png";

const Komunitaspage = () => {
  return (
    <div className={"overflow-x-hidden min-w-screen"}>
      <Navbar theme='transparent' />
      {/* Banner Section Start */}
      <section
        className={
          "w-screen overflow-hidden h-[80vh]  md:py-0 md:h-[70vh] lg:h-[80vh] bg-slate-900 relative"
        }
      >
        <img
          src={BackgroundComunity}
          alt=''
          className={"object-cover bg-center w-full h-full"}
        />
        <div className={"text-center w-full md:w-3/4 text-white z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3"}>
          <h2 className={'font-poppins text-3xl md:text-5xl font-semibold'}>Gabung yuk di komunitas kami</h2>
          <p className={'w-4/5 md:w-3/4 font-poppins font-md md:text-lg'}>
            Disini kamu bisa bertemu dengan orang-orang hebat yang bisa kamu
            ajak untuk bertukar informasi mengenai segala hal tentang
            Pengelolaan Sampah
          </p>
        </div>
      </section>
      {/* Banner Section End */}
    </div>
  );
};

export default Komunitaspage;
