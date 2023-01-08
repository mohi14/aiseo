import React, { useState } from 'react';
import './Navbar.css'
import { FiAlignJustify, FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
    // const handleBurgerIcon = () => {
    //     const x = document.getElementById('myNav');
    //     if (x.className === 'nav') {
    //         x.className += "responsive";
    //     }
    //     else {
    //         x.className = 'nav';
    //     }
    // }

    const [mode, setMode] = useState(false)
    const handleDarkMode = () => {
        setMode(!mode)
    }
    return (
        <nav className='navbar'>
            <div className='logo'>
                <img src={require('../../../Assests/logo.png')} alt="" />
            </div>

            <div className='nav' id='myNav'>
                <a href="">Chrome Extension</a>
                <a href="">Paraphrasing tool</a>
                <a href="">Resources</a>
                <a href="">Products</a>
                <a href="">Become an affiliate (48%)</a>
                <a href="">Pricing</a>
                <a href="javascript:void(0);" className='icon' ><FiAlignJustify /></a>
            </div>

            <div className='login-container'>
                <div className='dark-mode-button' onClick={handleDarkMode}>
                    {
                        mode ? <FiMoon /> : <FiSun />
                    }
                </div>
                <div>
                    <button className='login-button'>Log In</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;