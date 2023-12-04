import React, { useState } from 'react';

const SearchDashboard = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="mt-4">
      <div className="mt-1 flex rounded-md shadow-sm">
        <input
          type="text"
          name="search"
          id="search"
          className="focus:ring-green-500 focus:border-green-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
          placeholder="Cari nasabah"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchDashboard;
