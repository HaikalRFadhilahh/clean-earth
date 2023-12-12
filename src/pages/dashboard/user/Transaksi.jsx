import React, { useState, useEffect } from 'react';
import SearchDashboard from '../../../components/SearchDashboard';
import { NavLink } from 'react-router-dom';

const Transaksi = () => {
  const [transaksiData, setTransaksiData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchTransaksiData = async () => {
      try {
        const response = await fetch('https://precious-battledress-ray.cyclic.app/historytransaksi');
        const data = await response.json();
        setTransaksiData(data);
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching transaksi data:', error);
      }
    };

    fetchTransaksiData();
  }, []);

  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <main>
        <div className="relative mx-4 sm:p-6 rounded-sm overflow-hidden">
          <h1 className="font-poppins p-4 rounded-lg text-2xl md:text-3xl shadow-xl font-bold capitalize">
            Transaksi
          </h1>
        </div>
        <div className="m-8 overflow-auto">
          <h2 className="text-xl font-semibold border-b-2 px-2 py-4 bg-[#EFF3F0]">Riwayat Transaksi Setor Sampah</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#EFF3F0]">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  ID Transaksi
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Waktu
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Jenis Sampah
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Jumlah
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Nominal
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {searchResults.map((transaksi) => (
                <tr key={transaksi.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{transaksi.id_transaksi}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(transaksi.waktu).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaksi.jenis_sampah}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaksi.jumlah}</td>
                  <td className="px-6 py-4 whitespace-nowrap">Rp. {transaksi.nominal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Transaksi;
