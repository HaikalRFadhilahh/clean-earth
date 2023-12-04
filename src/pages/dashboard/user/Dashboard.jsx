import React from "react";
import { NavLink } from "react-router-dom";
import { MdAttachMoney } from "react-icons/md";

import Chart from "../../../components/dashboard/user/BarChart";

const Dashboard = () => {
  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <main>
        <div className="relative mx-4 sm:p-6 rounded-sm overflow-hidden">
          <h1 className="font-poppins p-4 rounded-lg text-2xl md:text-3xl shadow-xl font-bold capitalize">
            Dashboard
          </h1>
        </div>
        <div>
          <NavLink>
            <div className="flex justify-between bg-[#F6F6F6] lg:w-96 md:w-52 p-5 rounded-lg shadow-xl mx-10 mb-8">
              <div className="flex flex-col justify-center font-poppins">
                <p>Total Transaksi Setor Sampah</p>
                <h2 className="text-2xl font-bold mt-2">Rp. 230.000</h2>
              </div>
              <div className="">
                <MdAttachMoney className="w-12 h-12" color="#79AC78" />
              </div>
            </div>
          </NavLink>
        </div>
        <div className="shadow-2xl border-2 shadow-black-600 p-4 rounded-3xl mx-10 mb-5">
          <Chart />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
