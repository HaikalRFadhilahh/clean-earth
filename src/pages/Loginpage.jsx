import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import BannerLogin from "../assets/login/imgLogin.png";

const Loginpage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
   e.preventDefault();
   
   try {
     console.log('Starting login...');
     const response = await axios.post('http://localhost:3001/login', {
       username,
       password,
     });
 
     const token = response.data.token;
     localStorage.setItem('token', token);
     console.log('Login successful!');

     navigate('/');
   } catch (error) {
      window.alert('Username atau password salah !')
      console.error('Login failed:', error.response.data);
   }
 };
 

  return (
    <div className='w-full flex bg-[#B0D9B1]'>
      <div className='md:w-1/2 h-screen bg-cover bg-right' style={{backgroundImage: `url(${BannerLogin})`}}></div>
      
      <div className='w-full md:w-1/2 flex justify-center items-center'>
         <form onSubmit={handleLogin} className='bg-white w-4/5 h-5/6 rounded-3xl p-12 font-poppins'>
            <h1 className='text-5xl font-medium mt-8 mb-16'>
               Masuk
            </h1>
            <div className='flex flex-col'>
               <label className='mb-4'>Username</label>
               <input 
                  type="text" 
                  value={username} 
                  onChange={handleUsernameChange} 
                  placeholder='Username'
                  className='outline outline-[#ADADAD] p-4 rounded-xl text-black'
               />

               <label className='mt-8 mb-4'>Password</label>
               <input 
                  type="password" 
                  value={password} 
                  onChange={handlePasswordChange} 
                  placeholder='Password'
                  className='outline outline-[#ADADAD] p-4 rounded-xl text-black'
               />

               <div className='flex justify-between mt-8 mx-4'>
                  <div>
                     <p>Tidak punya Akun ?</p>
                     <Link to="/daftar" className='text-[#4285F4]'>Daftar</Link>
                  </div>
                  <Link to="/" className='text-[#4285F4]'>Lupa Password</Link>
               </div>

               <div className='flex justify-center'>
                  <button type='submit' className='mt-12 px-5 py-2 rounded-md bg-[#B0D9B1]'>
                     Masuk
                  </button>
               </div>
            </div>
         </form>
      </div>
    </div>
  )
}

export default Loginpage