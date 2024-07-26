import React, { useEffect, useRef } from 'react'
import { NavbarStyled } from './Navbar.style'
import DarkMode from '../DarkMode/DarkMode'
import MenuIcon from '@mui/icons-material/Menu';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';



const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current && 
      !mobileMenuRef.current.contains(event.target) &&
      menuButtonRef.current &&
      !menuButtonRef.current.contains(event.target)
    ) {
      setShowMobileMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  return (
    <NavbarStyled>
        <h1 className='logo'>&lt; marianoツ&gt;</h1>
        <nav className='menu-container'>
          <ul className='header-items'>
            <li><a href="#experience">Experiência</a></li>
            <li><a href="#formation">Formação</a></li>
            <li><a href="#contact">Contato</a></li>
            <DarkMode/>
          </ul>
        </nav>
        <div 
          className='menu-mobile-button'
          ref={menuButtonRef}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <MenuIcon/>
        </div>
        <div 
          className={`mobile-menu ${showMobileMenu && 'open'}`}
          ref={mobileMenuRef}
        >
          <ul className='header-items menu-mobile-navigation'>
            <li>
              <a 
                href="#experience"
                onClick={() => setShowMobileMenu(false)}
              >
               <WorkIcon/> Experiência
              </a>
            </li>
            <li>
              <a 
                href="#formation"
                onClick={() => setShowMobileMenu(false)}
              >
                <SchoolIcon/> Formação
              </a>
            </li>
            <li>
              <a 
                href="#contact"
                onClick={() => setShowMobileMenu(false)}
              >
               <AlternateEmailIcon/> Contato
              </a>
            </li>
          </ul>
          <div className='dark-mode-mobile-container'>
            <DarkMode/>
          </div>
        </div>
    </NavbarStyled>
  )
}

export default Navbar