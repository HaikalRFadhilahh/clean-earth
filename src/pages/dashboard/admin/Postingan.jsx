import { React, useState } from 'react';
import Editor from 'react-simple-wysiwyg';

const Postingan = () => {

  const [html, setHtml] = useState('');
  
  function onChange(e) {
    setHtml(e.target.value);
  }

  return (
    <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden font-poppins'>
      <main>
        <div className='relative mx-4 sm:p-6 rounded-sm overflow-hidden'>
          <h1 className='font-poppins p-4 rounded-lg text-2xl md:text-3xl bg-[#718977] text-white shadow-xl font-bold capitalize'>
            Postingan
          </h1>
        </div>
        <div className='w-full flex justify-between p-4 sm:px-10'>
        </div>
        <div className='px-8 py-6 w-fullmin-h h-fit overflow-auto'>
          <h2 className='text-xl font-bold border-b-2 px-2 py-4'>
          Informasi Data Postingan
          </h2>
          <div className='flex flex-col my-4 w-full'>
            <label className='py-2'>Judul</label>
            <input 
            type="text"
            name="judul"
            className='w-2/3 rounded-xl'
            />
          </div>
          <div className='mt-8'>
            <Editor value={html} onChange={onChange} /> 
          </div>
          <div className='my-12 flex justify-center gap-4 text-white'>
            <button
              type="batal"
              className="bg-[#949494] py-2 px-4 rounded hover:bg-[#727272]"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-[#154EF9] py-2 px-4 rounded hover:bg-[#161ae2]"
            >
              Simpan
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Postingan
