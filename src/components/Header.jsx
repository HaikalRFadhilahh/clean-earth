import React, { useState } from "react";

import { IoPersonCircle } from "react-icons/io5";

function Header({ sidebarOpen, setSidebarOpen }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30">
      <div className="px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex items-center  ">
            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>
          <div className="flex border-2 border-black rounded-full p-2 lg:mr-14 sm:mr-0">
            <IoPersonCircle color="#618264" className="w-8 h-6 mr-1" />
            <h2 className="font-poppins font-bold lg:text-base sm:text-sm">Ndaru Windra Sayidinaa</h2>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
