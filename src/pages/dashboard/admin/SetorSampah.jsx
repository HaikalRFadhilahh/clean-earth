import React, { useState, useEffect } from 'react';
import SearchDashboard from '../../../components/SearchDashboard';
import Button from "../../../components/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SetorSampah = () => {
  const navigate = useNavigate();
  const [setorSampahData, setSetorSampahData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchSetorSampahData();
  }, []);

  const fetchSetorSampahData = async () => {
    try {
      const response = await fetch('https://precious-battledress-ray.cyclic.app/setorsampah');
      const data = await response.json();
      setSetorSampahData(data);
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching setor sampah data:', error);
    }
  };

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setSearchResults(setorSampahData);
    } else {
      const filteredResults = setorSampahData.filter((setor) =>
        setor.nama.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  };

  const handleEdit = (id) => {
    navigate(`/dashboard/editsetorsampah/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://precious-battledress-ray.cyclic.app/setorsampah/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        // Fetch the updated setor sampah data after successful deletion
        fetchSetorSampahData();
        console.log(`Data with ID ${id} deleted successfully`);
      } else {
        console.error(`Failed to delete data with ID ${id}`);
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };
  
  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <main>
        <div className="relative mx-4 sm:p-6 rounded-sm overflow-hidden">
          <h1 className="font-poppins p-4 rounded-lg text-2xl md:text-3xl bg-[#718977] text-white shadow-xl font-bold capitalize">
            Data Setor Sampah
          </h1>
        </div>
        <div className='w-full flex justify-between p-4 sm:px-10'>
          <SearchDashboard onSearch={handleSearch} />
          <NavLink
            className='w-fit h-fit px-5 py-2 my-1 ml-2 rounded-md bg-[#B0D9B1] '
            to='/dashboard/tambahsetorsampah'
          >
            Tambah
          </NavLink>
        </div>
        <div className="m-8 overflow-auto">
          <h2 className="text-xl font-semibold border-b-2 px-2 py-4 bg-[#EFF3F0]">Rincian Data Setor Sampah</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#EFF3F0]">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nomor
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Waktu
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nama
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Jenis Sampah
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Jumlah
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nominal
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {searchResults.map((setor, index) => (
                <tr key={setor._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{new Date(setor.waktu).toLocaleDateString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{setor.nama}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{setor.jenis_sampah}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{setor.jumlah}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{setor.nominal}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button
                      className='mr-2 bg-[#FFF383] text-black py-2 px-4 rounded'
                      onClick={() => handleEdit(setor._id)}
                    >
                      <FaEdit/>
                    </Button>
                    <Button
                      className='bg-[#EE5252] text-black py-2 px-4 rounded'
                      onClick={() => handleDelete(setor._id)}
                    >
                      <MdDelete/>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

export default SetorSampah;
