import React from 'react'
import { DarkModeButtonStyled } from './DarkModeButton.style';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode'; 
import { GlobalContext } from '../../Context/GlobalContext';


function DarkMode({...props}: React.HTMLAttributes<HTMLDivElement>) {

    const {isDark, setIsDark} = React.useContext(GlobalContext);

    return (
        <DarkModeButtonStyled {...props} className='dark-mode-button'>
            <input 
                id='dark-mode-toggle'
                type="checkbox"
                className='dark-mode-toggle'
                checked={isDark}
                onChange={() => setIsDark(!isDark)}
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