import React, { useEffect } from 'react'
import { DarkModeButtonStyled } from './DarkModeButton.style';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode'; 



function DarkMode() {

    const [isDark, setIsDark] = React.useState(() => localStorage.getItem('theme') === 'dark' ? true : false);

    function setDarkMode(){
        document.querySelector('body')?.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    function setLighthMode(){
        document.querySelector('body')?.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }

    useEffect(() =>{
        if(isDark) setDarkMode();
        else setLighthMode();
    }, [isDark])

    return (
        <DarkModeButtonStyled >
            <input 
                id='dark-mode-toggle'
                type="checkbox"
                className='dark-mode-toggle'
                checked={isDark}
                onChange={(e) => setIsDark(e.target.checked)}
            />
            <label htmlFor="dark-mode-toggle">
                <div className='dark-mode-icons-container'>
                    {isDark ? <DarkModeIcon className='dark-mode-icon'/> : <LightModeIcon className='dark-mode-icon'/>}
                </div>

            </label>
        </DarkModeButtonStyled>
    )
}

export default DarkMode