import React from 'react'
/* import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode'; */



function DarkMode() {

    function setDarkMode(){
        document.querySelector('body')?.setAttribute('data-theme', 'dark');
    }
    function setLighthMode(){
        document.querySelector('body')?.setAttribute('data-theme', 'light');
    }

    function toggleTheme(e: React.ChangeEvent<HTMLInputElement>): void {
        if (e.target.checked) setDarkMode();
        else setLighthMode();        
    }

    return (
        <div>
            <input 
                id='dark-mode'
                type="checkbox"
                onChange={toggleTheme}
            />
            {/* <label htmlFor='dark-mode'>
                <LightModeIcon/>
                <DarkModeIcon/>
            </label> */}
        </div>
    )
}

export default DarkMode