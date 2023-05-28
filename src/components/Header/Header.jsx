import React from 'react';
import SearchBar from '../Searchbar/SearchBar';
import notification from "../../assets/notification.svg"
import "./header.css"

const Header = () => {
  return (
    <div className='Header-wrapper'>
        <SearchBar />
        <div className='profile'>
            <img src={notification} alt="notify logo" className='notify-img' />
            
            <div className='profile-inner'>
            <div className='Profile-pics'></div>
            <h2 className='Profile-greetings'>Hi, Ayobami</h2>
            </div>
        </div>
    </div>
  )
}

export default Header