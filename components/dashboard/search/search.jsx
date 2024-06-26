// import React from "react";
import "./search.css";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  return (
    <div className="search-bar">
      <div className="container search-container">
        <MdSearch />
        <input type="text" placeholder={placeholder} className="input" />
      </div>
    </div>
  );
};

export default Search;
