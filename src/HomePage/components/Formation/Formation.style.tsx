import styled from "styled-components";

export const FormationStyled = styled.section`
    background-color: #141414 ;

    .subtitle{
        color: #000;
        max-width: 4ch;
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


    .container{
        padding: 120px 20px;
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 100px;
        position: relative;
    }

    .container::after{
            content: "";
            display: block;
            width: 130px;
            height: 100px;
            background: url('/src/assets/detalhe.svg') no-repeat center;
            position: absolute;
            bottom: -50px;
            left: 20px;
        }

    @media (max-width: 800px){
        .container{
            grid-template-columns: 1fr;
            padding: 60px 20px;
            gap: 40px;
        }

        .subtitle{
            color: #FFF;
            max-width: initial !important;
        }

        .formation-text{
            font-size: 1.125rem;
            max-width: 100%;
        }
        
    }
`