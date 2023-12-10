import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditSetorSampah = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    waktu: '',
    nama: '',
    jenis_sampah: '',
    jumlah: '',
    nominal: '',
  });

  useEffect(() => {
    const fetchSetorSampahData = async () => {
      try {
        const response = await fetch(`https://precious-battledress-ray.cyclic.app/setorsampah/${id}`);
        if (response.ok) {
          const data = await response.json();
          setFormData(data);
        } else {
          console.error('Gagal mengambil data Setor Sampah');
        }
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
      }
    };

    fetchSetorSampahData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://precious-battledress-ray.cyclic.app/setorsampah/${id}`, {
        method: 'PUT',
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
            Edit Data Setor Sampah
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="m-8">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Waktu:</label>
            <input
              type="text"
              name="waktu"
              value={formData.waktu}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="YYYY-MM-DD"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Nama:</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Jenis Sampah:</label>
            <input
              type="text"
              name="jenis_sampah"
              value={formData.jenis_sampah}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Jumlah:</label>
            <input
              type="text"
              name="jumlah"
              value={formData.jumlah}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Nominal:</label>
            <input
              type="text"
              name="nominal"
              value={formData.nominal}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-[#B0D9B1] py-2 px-4 rounded hover:bg-[#45a049]"
          >
            Simpan Perubahan
          </button>
        </form>
      </main>
    </div>
  );
};

export default EditSetorSampah;
