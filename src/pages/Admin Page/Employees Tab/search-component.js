import React, { useState } from "react";
import { SearchInput } from "./styles";

const SearchComponent = ({ searchTerm, setSearchTerm }) => {
  return (
    <SearchInput
      type="text"
      value={searchTerm}
      placeholder="Search employee"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchComponent;
