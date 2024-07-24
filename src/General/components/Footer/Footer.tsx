import React from 'react'
import { FooterStyled } from './Footer.style'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



function Footer() {
  return (
    <FooterStyled id='contact'>
        <div className='contentArea container'>
            <p className='footer-text'>
                Se você deseja entrar em contato comigo para discutir oportunidades de trabalho, projetos ou simplesmente trocar ideias sobre tecnologia, sinta-se à vontade!👋🏻
            </p>
            <ul className='footer-contact'>
                <li>
                  <AlternateEmailIcon/>  <a href="mailto:mariano.silva@ufvjm.edu.br">mariano.silva@ufvjm.edu.br</a>
                </li>
                <li> 
                   <WhatsAppIcon/> <a href="https://wa.me/5538988539207?text=Ol%C3%A1%2C%20Mariano!" target='_blank'>Whatsapp</a>
                </li>
                <li>
                    <LinkedInIcon/> <a href="https://www.linkedin.com/in/mariano-carlos-silva/" target='_blank'>Linkedin</a>
                </li>
                <li>
                   <GitHubIcon/> <a href="https://github.com/Mariano-SI" target='_blank'>Github</a>
                </li>
            </ul>
            <p className='footer-copy'>Mariano C. Silva. Alguns direitos reservados.</p>
        </div>
    </FooterStyled>
  )
}

export default Footer