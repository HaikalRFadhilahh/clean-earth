import React, { useState, useEffect } from 'react';
import SearchDashboard from '../components/SearchDashboard';
import Button from "../components/Button";

const Nasabah = () => {
  const [nasabahData, setNasabahData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchNasabahData();
  }, []);

  const fetchNasabahData = async () => {
    try {
      const response = await fetch('http://localhost:3001/nasabah');
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

  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <main>
        <div className="relative mx-4 sm:p-6 rounded-sm overflow-hidden">
          <h1 className="font-poppins p-4 rounded-lg text-2xl md:text-3xl bg-[#718977] text-white shadow-xl font-bold capitalize">
            Dashboard
          </h1>
        </div>
        <div className='w-full flex justify-between p-4 sm:px-10'>
          <SearchDashboard onSearch={handleSearch} />
          <Button
            className='w-fit h-fit py-2 px-2 bg-[#B0D9B1] outline outline-1 outline-black '
            type='submit'
          >
            Tambah
          </Button>
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
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {searchResults.map((nasabah, index) => (
                <tr key={nasabah.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{nasabah.nama}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{nasabah.no_telpon}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{nasabah.alamat}</td>
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
