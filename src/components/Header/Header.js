import React from 'react';
import Navbar from './Navbar/Navbar';
import './Header.css'
import Banner from './Banner/Banner';

const Header = () => {
    return (
        <div className='header'>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;