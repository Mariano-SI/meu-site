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
    .header-menu{
        display: flex;
        gap: 10px;
        flex-wrap: wrap;  
        justify-content:center ;
    }

    .header-menu a{
        font-size: 1.125rem;
        line-height: 1.3;
        display: block;
        padding: 20px 20px;
        text-decoration: none;
        color: #141414;
        position: relative;
    }



    .header-menu a::before {
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

    .header-menu a:hover::before {
        visibility: visible;
        width: 80%;
    }

    @media(max-width: 800px){
        flex-direction: column;
        gap: 40px;
        padding: 20px;

        .header-menu a{
            background-color: #F5F5F5;
            border-radius: 4px;
        }
    }
`