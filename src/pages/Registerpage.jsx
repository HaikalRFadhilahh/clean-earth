import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BannerLogin from "../assets/login/imgLogin.png";


const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3001/register', {
        email,
        username,
        phoneNumber,
        password,
      });
  
      console.log(response.data);
      window.alert('Daftar berhasil !')
      navigate('/masuk');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className='w-full flex bg-[#B0D9B1]'>
      <div className='w-1/2 h-screen bg-cover bg-right' style={{backgroundImage: `url(${BannerLogin})`}}></div>
      
      <div className='w-1/2 flex justify-center items-center'>
        <form onSubmit={handleRegister} className='bg-white w-4/5 h-5/6 rounded-3xl p-12 font-poppins'>
            <h1 className='text-5xl font-medium mb-10'>
              Daftar
            </h1>
            <div className='flex flex-col'>

              <label className='mb-4'>Email</label>
              <input 
                type="email" 
                value={email} 
                onChange={handleEmailChange} 
                placeholder='Email'
                className='outline outline-[#ADADAD] p-4 rounded-xl text-black'
                aria-label='Email'
              />

              <div className='flex justify-between'>
                  <div className='flex flex-col w-screen mr-4'>
                     <label className='my-4'>Username</label>
                     <input 
                        type="text" 
                        value={username} 
                        onChange={handleUsernameChange} 
                        placeholder='Username'
                        className='outline outline-[#ADADAD] p-4 rounded-xl text-black'
                        aria-label='Username'
                     />
                  </div>
                  <div className='flex flex-col w-screen ml-4'>
                     <label className='my-4'>Nomor Kontak</label>
                     <input 
                        type="tel" 
                        value={phoneNumber} 
                        onChange={handlePhoneNumberChange} 
                        placeholder='Nomor Kontak'
                        className='outline outline-[#ADADAD] p-4 rounded-xl text-black'
                        aria-label='Nomor Kontak'
                     />
                  </div>
              </div>

              <label className='my-4'>Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={handlePasswordChange} 
                placeholder='Password'
                className='outline outline-[#ADADAD] p-4 rounded-xl text-black'
                aria-label='Password'
              />

              <div className='flex justify-between mt-8 mx-4'>
                <div>
                  <p>Sudah punya Akun ?</p>
                  <Link to="/masuk" className='text-[#4285F4]'>Masuk</Link>
                </div>
              </div>

              <div className='flex justify-center'>
                  <button type="submit" className='mt-8 px-5 py-2 rounded-md bg-[#B0D9B1]'>
                     Daftar
                  </button>
              </div>

            </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
