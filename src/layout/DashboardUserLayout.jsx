import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/dashboard/user/Sidebar";
import Header from "../components/dashboard/user/Header";

const DashboardUserLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar */}

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/*  Site header */}

      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <Outlet setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      </div>
    </div>
  );
};

export default DashboardUserLayout;
