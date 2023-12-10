import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

const TambahSetorSampah = () => {
  const [formData, setFormData] = useState({
    waktu: new Date(),
    nama: '',
    jenis_sampah: '',
    jumlah: '',
    nominal: '',
  });

  const navigate = useNavigate();

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://precious-battledress-ray.cyclic.app/setorsampah', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/dashboard/setorsampah');
      } else {
        console.error('Gagal mengirim data');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };

  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <main>
        <div className="relative mx-4 sm:p-6 rounded-sm overflow-hidden">
          <h1 className="font-poppins p-4 rounded-lg text-2xl md:text-3xl bg-[#718977] text-white shadow-xl font-bold capitalize">
            Tambah Data Setor Sampah
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="m-8">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Waktu:</label>
            <DatePicker
              selected={formData.waktu}
              onChange={(date) => handleChange('waktu', date)}
              className="mt-1 p-2 w-full border rounded-md"
              dateFormat="yyyy-MM-dd"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Nama:</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={(e) => handleChange('nama', e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Jenis Sampah:</label>
            <input
              type="text"
              name="jenis_sampah"
              value={formData.jenis_sampah}
              onChange={(e) => handleChange('jenis_sampah', e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Jumlah:</label>
            <input
              type="text"
              name="jumlah"
              value={formData.jumlah}
              onChange={(e) => handleChange('jumlah', e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Nominal:</label>
            <input
              type="text"
              name="nominal"
              value={formData.nominal}
              onChange={(e) => handleChange('nominal', e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-[#B0D9B1] py-2 px-4 rounded hover:bg-[#B0D9B1]"
          >
            Simpan
          </button>
        </form>
      </main>
    </div>
  );
};

export default TambahSetorSampah;