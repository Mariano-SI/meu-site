import styled from "styled-components";

export const ScrollToTopButtonStyled = styled.div`

    &:hover{
        cursor: pointer;
    }

    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: fixed;
    bottom: 40px;
    right: 40px;
    display: flex;
    align-items: center;
    border: 2px solid #FFF;
    background-color: #141414;
    justify-content: center;

    .scroll-button-icon{
        color: var(--primary-color);
    }

    @media(max-width: 800px){
        width: 50px;
        height: 50px;
    }
`