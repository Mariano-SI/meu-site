import styled from "styled-components";

export const FormationStyled = styled.section`
    background-color: #141414 ;

    .subtitle{
        color: #000;
    }

    .formation-text{
        font-size: 1.5rem;
        line-height: 1.33;
        max-width: 40ch;
        margin-bottom: 60px;
        color: #A3A3A3;
    }
    .formation-text strong{
        color: white;
    }

    .formation-cards-container{
        display: flex;
        justify-content: end;
        flex-wrap: wrap;
        gap: 20px;
        margin-bottom: 60px;
    }

    color: white;
    .container{
        padding: 40px 20px;
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 100px;
    }
`