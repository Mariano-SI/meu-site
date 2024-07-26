import styled from "styled-components";

export const DarkModeButtonStyled = styled.div`

    .dark-mode-toggle{
        visibility: hidden;
    }

    .dark-mode-toggle + label{
        display: flex;
        align-items: center;
        font-size: 1rem;
        cursor: pointer;
        color: var(--main-texts-color);
        position: relative;
    }

    .dark-mode-toggle + label::before{
        content: "";
        height: 24px;
        width: 50px;
        border-radius: 16px;
        background-color: var(--main-texts-color);
        transition: background-color 250ms ease-in-out;
    }



    .dark-mode-icons-container{
        display: flex;
        align-items: center;
        position: absolute;
        left: 4px;
        transition: transform 0.4s ease-in-out;
    }

    .dark-mode-icon{
        font-size: 20px;
        color: var(--background-color);
    }
    .dark-mode-toggle:checked + label .dark-mode-icons-container{
        transform: translateX(100%);
        
    }
`