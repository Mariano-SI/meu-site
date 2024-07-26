import styled from 'styled-components'

export const NavbarStyled = styled.header`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 20px;

    .logo{
        font-weight: 900;
    }

    .logo:hover{
        cursor: pointer;
    }
   .header-items{
        display: flex;
        gap: 10px;
        flex-wrap: wrap;  
        justify-content:center ;
    }

    .header-items a{
        font-size: 1.125rem;
        line-height: 1.3;
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 12px;
        padding: 20px 20px;
        text-decoration: none;
        color: var(--main-texts-color);
        position: relative;
    }



    .header-items a::before {
        content: '';
        position: absolute;
        width: 0px;
        height: 2px;
        bottom: 0;
        left: 20;
        background-color: var(--primary-color);
        visibility: hidden;
        transition: all 0.3s ease-in-out;
    }

    .header-items a:hover::before {
        visibility: visible;
        width: 80%;
    }

    .menu-mobile-button{
        display: none;
    }
    .mobile-menu {
        position: fixed;
        top: 10;
        bottom: 0;
        right: 0;
        width: 300px; 
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3); /* cor de fundo semi-transparente */
        backdrop-filter: blur(10px);
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
        z-index: 1000;
        border-top-left-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .mobile-menu.open {
        transform: translateX(0);
    }
    .menu-mobile-navigation{
        margin-top: 40px;
        flex-direction: column;
    }
    .dark-mode-mobile-container{
        display: flex;
        justify-content: end;
        padding: 20px;
    }
    @media(max-width: 850px){
        .menu-container{
            display: none;
        }
        .menu-mobile-button{
            display: block;
            cursor: pointer;
        }
    }

    @media(max-width: 800px){

    }
`