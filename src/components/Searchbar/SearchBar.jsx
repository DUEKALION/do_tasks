import React from 'react';
import "./searchbar.css";
import search from "../../assets/search.svg";

const SearchBar = () => {
  return (
    <div className='SearchBar-wrapper'>
        <img src={search} alt="sort icon" />
        <input type="search" placeholder='Search' className='input'/>
    </div>
  )
}

export default SearchBar