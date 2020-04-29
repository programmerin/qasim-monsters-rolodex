import React from "react";
import "./search-box.css";

const searchBox = ({ searchChange }) => (
  <input
    onChange={searchChange}
    className="search"
    type="search"
    placeholder="search monster"
  />
);

export default searchBox;
