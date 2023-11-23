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
              <a href={"#"}>Instagram</a>
            </li>
            <li className={"text-base font-light"}>
              <a href={"#"}>Facebook</a>
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
              <a href={"#"}>Edukasi</a>
            </li>
            <li className={"text-base font-light text-[#F4F0F0]"}>
              <a href={"#"}>Komunitas</a>
            </li>
            <li className={"text-base font-light text-[#F4F0F0]"}>
              <a href={"#"}>Jual Beli</a>
            </li>
            <li className={"text-base font-light text-[#F4F0F0]"}>
              <a href={"#"}>Umpan Balik</a>
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
              className={"text-center font-outfit font-semibold text-2xl mb-2"}
            >
              <h3>Instagram</h3>
            </li>
            <li>@anisaaa_hsnh</li>
            <li>@maulida_mila07</li>
            <li>@ndaruwindra</li>
            <li>@septyanrully_ekel</li>
            <li>@__faeznz</li>
            <li>@haikalrfadhilah</li>
            <li>@yuliyana_ng</li>
          </ul>
        </div>
        <h2
          className={
            "w-full text-center font-poppins font-semibold text-lg text-[#F4F0F0] my-4 md:my-0"
          }
        >
          Copyright 2023 CleanEarth
        </h2>
      </div>
    </section>
  );
};

export default Footer;
