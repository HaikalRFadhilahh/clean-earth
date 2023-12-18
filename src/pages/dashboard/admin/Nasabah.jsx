import React, { useState, useEffect } from "react";
import SearchDashboard from "../../../components/SearchDashboard";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { datausers, token } from "../../../store";
import { useRecoilState } from "recoil";
import axios from "axios";

const Nasabah = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [datauser, setDatauser] = useRecoilState(datausers);
  const [tokenJWT, setTokenJWT] = useRecoilState(token);
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    const getDataUsers = async () => {
      try {
        const result = await axios.post(
          `${import.meta.env.VITE_API_SERVICE}/users/getusers`,
          {},
          {
            headers: {
              Authorization: tokenJWT,
              Accept: "application/json",
              "Content-Type": "application/json;charset=UTF-8",
            },
          }
        );

        setDataUsers(result.data.data);
        console.log(result.data.data);
      } catch (error) {
        setDatauser({});
        setTokenJWT(undefined);
        navigate("/masuk");
      }
    };
    getDataUsers();
  }, [navigate]);

  return (
    <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
      <main>
        <div className='relative mx-4 sm:p-6 rounded-sm overflow-hidden'>
          <h1 className='font-poppins p-4 rounded-lg text-2xl md:text-3xl bg-[#718977] text-white shadow-xl font-bold capitalize'>
            Anggota
          </h1>
        </div>
        <div className='w-full flex justify-between p-4 sm:px-10'>
          <SearchDashboard />
        </div>
        <div className='px-8 py-6 w-fullmin-h h-fit overflow-auto'>
          <h2 className='text-xl font-semibold border-b-2 px-2 py-4 bg-[#EFF3F0]'>
            Daftar Nasabah
          </h2>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-[#EFF3F0]'>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Nomor
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Nama
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  No Telepon
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Alamat
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {dataUsers.length == 0 ? (
                <tr>
                  <td
                    colSpan={"5"}
                    className={
                      "text-center px-6 py-4 whitespace-nowrap font-semibold text-lg font-poppins"
                    }
                  >
                    Belum Ada Anggota
                  </td>
                </tr>
              ) : (
                <></>
              )}
              {dataUsers.map((item, i) => {
                return (
                  <tr key={item.id}>
                    <td className='px-6 py-4 whitespace-nowrap'>{i + 1}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{item.nama}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {item.kontak}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {item.alamat}
                    </td>
                    <td>Coming Soon</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Nasabah;
