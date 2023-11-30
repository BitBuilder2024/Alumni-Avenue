import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Perform search using the onSearch prop
    onSearch(searchTerm);
  };

  return (
    <div className="search">
      <button onClick={handleSearch}>Search</button>
      <input
        type="text"
        className="search-bar"
        placeholder="Search by group name"
        value={searchTerm}
        onChange={handleInputChange}
      />
      
    </div>
  );
};

export default SearchBar;