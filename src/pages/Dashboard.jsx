import React from "react";
import Chart from "../components/BarChart";
import CardDashboard from "../components/CardDashboard";
import WelcomeBanner from "../components/WelcomeBanner";

const Dashboard = () => {
  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <main>
        <div className="relative mx-4 sm:p-6 rounded-sm overflow-hidden">
          <h1 className="font-poppins p-4 rounded-lg text-2xl md:text-3xl bg-[#718977] text-white shadow-xl font-bold capitalize">
            Dashboard
          </h1>
        </div>
        <div className="px-5 w-full max-w-9xl mx-auto">
          {/* Welcome banner */}
          <WelcomeBanner />
        </div>
        <div>
          <CardDashboard/>
        </div>
        <div className="shadow-2xl border-2 shadow-black-600 p-4 rounded-3xl mx-10 mb-5">
          <Chart/>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
