import React from "react";
import "./SearchBoxStyles.scss";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
