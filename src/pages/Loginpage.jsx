import ImgBanner from "../assets/login/imgLogin.png";
import AuthInput from "../components/AuthInput";
import Button from "../components/Button";
import { useState } from "react";

const Loginpage = () => {
  const [credentials, setCredentials] = useState({});

  const loginAction = async (e) => {
    e.preventDefault();
    console.log(credentials);
  };

  return (
    <div
      className={
        "w-screen min-h-screen overflow-x-hidden bg-[#D0E7D2] flex flex-wrap"
      }
    >
      {/* Image For Desktop Only */}
      <div className={"hidden lg:flex lg:w-1/2 h-screen bg-red-400"}>
        <img
          src={ImgBanner}
          alt='Banner Image'
          className={"object-cover backdrop-brightness-110"}
        />
      </div>
      {/* Form Section */}
      <div className={"w-screen lg:w-1/2 py-7 lg:py-0"}>
        <div className='container mx-auto h-full flex justify-center items-center flex-col px-3 lg:px-0'>
          <div
            className={
              "bg-white py-7 px-5 rounded-lg w-full lg:w-3/4 flex flex-col gap-7"
            }
          >
            <h2 className={"text-5xl font-poppins font-medium"}>Masuk</h2>
            <form
              action='POST'
              className={"flex flex-col gap-3"}
              onSubmit={loginAction}
            >
              <div className={"flex flex-col gap-2"}>
                <label htmlFor='email' className={"font-poppins text-md"}>
                  Masukkan Email Anda
                </label>
                <AuthInput
                  name='Email'
                  placeholder='Masukkan Email Anda'
                  onChange={(e) =>
                    setCredentials({ ...credentials, email: e.target.value })
                  }
                />
              </div>
              <div className={"flex flex-col gap-2"}>
                <label htmlFor='password' className={"font-poppins text-md"}>
                  Masukkan Password Anda
                </label>
                <AuthInput
                  name='Email'
                  type='password'
                  placeholder='Masukkan Email Anda'
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                />
              </div>
              <Button
                className='w-fit h-fit py-3 px-2 bg-[#B0D9B1] outline outline-1 outline-black mx-auto'
                type='submit'
              >
                Masuk
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
