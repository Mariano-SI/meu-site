import styled from "styled-components";

export const DarkModeButtonStyled = styled.div`
    position: absolute;
    top: 2rem;
    right: 2rem;
    .dark-mode-toggle{
        visibility: hidden;
    }

    .dark-mode-toggle + label{
        display: flex;
        align-items: center;
        font-size: 1rem;
        cursor: pointer;
        color: var(--main-texts-color);
    }

    .dark-mode-toggle + label::before{
        content: "";
        height: 1rem;
        width: 2rem;
        border-radius: 1rem;
        background-color: green;
        margin-right: 0.5rem;
        transition: background-color 250ms ease-in-out;
    }

    .dark-mode-toggle + label::after{
        content: "";
        height: 0.8rem;
        width: 0.8rem;
        border-radius: 1rem;
        position: absolute;
        background-color: yellow;
        left: 0.2rem;
        transition: background-color 250ms ease-in-out, transform 250ms ease-in-out;
    }
    .dark-mode-toggle:checked + label::after{
        transform: translateX(100%);
        right: 0.2rem;
    }
`