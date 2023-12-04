import React, { useState, useEffect } from 'react';
import SearchDashboard from '../../../components/SearchDashboard';
import Button from "../../../components/Button";
import { NavLink,useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Nasabah = () => {
  const navigate = useNavigate();
  const [nasabahData, setNasabahData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchNasabahData();
  }, []);

  const fetchNasabahData = async () => {
    try {
      const response = await fetch('https://precious-battledress-ray.cyclic.app/nasabah');
      const data = await response.json();
      setNasabahData(data);
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching nasabah data:', error);
    }
  };

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setSearchResults(nasabahData);
    } else {
      const filteredResults = nasabahData.filter((nasabah) =>
        nasabah.nama.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  };

  const handleEdit = (id) => {
    navigate(`/dashboard/editnasabah`);
  };
  

  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <main>
        <div className="relative mx-4 sm:p-6 rounded-sm overflow-hidden">
          <h1 className="font-poppins p-4 rounded-lg text-2xl md:text-3xl bg-[#718977] text-white shadow-xl font-bold capitalize">
            Nasabah
          </h1>
        </div>
        <div className='w-full flex justify-between p-4 sm:px-10'>
          <SearchDashboard onSearch={handleSearch} />
          <NavLink
            className='w-fit h-fit px-5 py-2 rounded-md bg-[#B0D9B1] '
            to='/dashboard/tambahnasabah'
          >
            Tambah
          </NavLink>
        </div>
        <div className="m-8">
          <h2 className="text-xl font-semibold border-b-2 px-2 py-4 bg-[#EFF3F0]">Daftar Nasabah</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#EFF3F0]">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nomor
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nama
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  No Telepon
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Alamat
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {searchResults.map((nasabah, index) => (
                <tr key={nasabah.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{nasabah.nama}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{nasabah.no_telpon}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{nasabah.alamat}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button
                      className='mr-2 bg-[#FFF383] text-black py-2 px-4 rounded'
                      onClick={() => handleEdit(nasabah.id)}
                    >
                      <FaEdit/>
                    </Button>
                    <Button
                      className='bg-[#EE5252] text-black py-2 px-4 rounded'
                      onClick={() => handleDelete(nasabah.id)}
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
  );
};

export default Nasabah;
