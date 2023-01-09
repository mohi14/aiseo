import React, { useContext, useState } from 'react';
import './Navbar.css'
import { FiAlignJustify, FiSun, FiMoon } from "react-icons/fi";
import { DarkModeContext } from '../../../contexts/DarkModeProvider';

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

    const { dark, setDark, darkMode } = useContext(DarkModeContext)

    const [mode, setMode] = useState(false)
    const handleDarkMode = () => {
        setMode(!mode)
        setDark(!dark)
        localStorage.setItem('dark', !darkMode)
    }
    return (
        <nav className='navbar'>
            <div className='logo'>
                <img src={require('../../../Assests/logo.png')} alt="" />
            </div>

            <div className='nav' id='myNav' style={{ color: darkMode ? 'black' : 'white' }}>
                <a href="">Chrome Extension</a>
                <a href="">Paraphrasing tool</a>
                <a href="">Resources</a>
                <a href="">Products</a>
                <a href="">Become an affiliate (48%)</a>
                <a href="">Pricing</a>
                <a href="" className='icon' ><FiAlignJustify /></a>
            </div>

            <div className='login-container'>
                <div className='dark-mode-button' onClick={() => handleDarkMode(dark)}>
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