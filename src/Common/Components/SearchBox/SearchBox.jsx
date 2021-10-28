import React from "react";
import "./SearchBoxStyles.scss";

const SearchBox = ({ ...props }) => {
  return <input {...props} className="search-box" type="search" />;
};

export default SearchBox;
