const Footer = () => {
  return (
    <section className={"lg:py-10 mg:px-10 lg:px-20 py-5 px-4 bg-[#20241F]"}>
      <div className='container mx-auto h-full flex flex-wrap justify-between px-3'>
        <div
          className={
            "flex flex-wrap text-white gap-x-10 gap-y-5 font-outfit w-full md:w-fit"
          }
        >
          <ul className={"flex flex-col gap-3 w-full md:w-fit items-center"}>
            <li>
              <h3 className={"text-2xl font-semibold mb-2"}>Sosial</h3>
            </li>
            <li className={"text-base font-light"}>
              <a href={"https://www.instagram.com/cleanearth12/"} target="_blank">Instagram</a>
            </li>
            <li className={"text-base font-light"}>
              <a href={"https://www.facebook.com/people/Celan-Earth/61554381076404/"} target="_blank">Facebook</a>
            </li>
            <li className={"text-base font-light"}>
              <a href={"#"}>Linkedin</a>
            </li>
          </ul>
          <ul className={"flex flex-col gap-3 w-full md:w-fit items-center"}>
            <li>
              <h3 className={"text-2xl font-semibold mb-2"}>Layanan</h3>
            </li>
            <li className={"text-base font-light text-[#F4F0F0]"}>
              <a href={"/edukasi"}>Edukasi</a>
            </li>
            <li className={"text-base font-light text-[#F4F0F0]"}>
              <a href={"/komunitas"}>Komunitas</a>
            </li>
            <li className={"text-base font-light text-[#F4F0F0]"}>
              <a href={"/"}>Umpan Balik</a>
            </li>
          </ul>
        </div>
        <div className={'w-full md:w-fit'}>
          <ul
            className={
              "font-outfit font-medium text-white flex flex-col gap-2 text-base items-center my-5 md:my-0"
            }
          >
            <li
              className={"text-center font-outfit font-semibold text-2xl mb-3"}
            >
              <h3>Instagram</h3>
            </li>
            <li><a href={"https://www.instagram.com/anisaaa_hsnh/"} target="_blank">@anisaaa_hsnha</a></li>
            <li><a href={"https://www.instagram.com/maulida_mila07/"} target="_blank">@maulida_mila07</a></li>
            <li><a href={"https://www.instagram.com/ndaruwindra/"} target="_blank">@ndaruwindra</a></li>
            <li><a href={"https://www.instagram.com/septyanrully_ekel/"} target="_blank">@septyanrully_eke</a></li>
            <li><a href={"https://www.instagram.com/__faeznz/"} target="_blank">@__faeznz</a></li>
            <li><a href={"https://www.instagram.com/haikalrfadhilah/"} target="_blank">@haikalrfadhilah</a></li>
            <li><a href={"https://www.instagram.com/yuliyana_ng/"} target="_blank">@yuliyana_ng</a></li>
          </ul>
        </div>
        <h2
          className={
            "w-full text-center font-poppins font-semibold text-lg text-[#F4F0F0] my-0 md:mt-10"
          }
        >
          Copyright 2023 CleanEarth
        </h2>
      </div>
    </section>
  );
};

export default Footer;
