import React, { createContext, useEffect, useState } from 'react';


export const DarkModeContext = createContext()

const DarkModeProvider = ({ children }) => {
    const darkMode = localStorage.getItem('dark') === 'true';
    const [dark, setDark] = useState(true)

    useEffect(() => {
        if (darkMode === true) {
            document.body.style.backgroundColor = 'black'
            document.body.style.color = 'white'
        }
        else {
            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'
        }
    }, [darkMode])

    const value = {
        dark,
        setDark,
        darkMode
    }
    return (
        <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>
    );
};

export default DarkModeProvider;