import React from 'react'
import { NavbarStyled } from './Navbar.style'
import DarkMode from '../DarkMode/DarkMode'



const Navbar = () => {
  return (
    <NavbarStyled>
        <h1 className='logo'>&lt; marianoツ&gt;</h1>
        <nav>
          <ul className='header-menu'>
            <li><a href="#experience">Experiência</a></li>
            <li><a href="#formation">Formação</a></li>
            <li><a href="#contact">Contato</a></li>
            <DarkMode/>
          </ul>
        </nav>
    </NavbarStyled>
  )
}

export default Navbar