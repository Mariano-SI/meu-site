import styled from "styled-components";

export const IntroductionStyled = styled.main`
    padding: 40px 20px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 100px;
    align-items: center;

    .title{
        font-size: 4.5rem;
        line-height: 1.125;
        position: relative;
    }

    .image{
        width: 300px;
        height: 300px;
        border-radius: 50%;
        object-fit: cover;
    }

    .fullstack{
        font-size: 4.5rem;
        line-height: 1.125;
        margin-bottom: 30px;
        border-right: 1px solid var(--main-texts-color);
        white-space: nowrap;
        overflow: hidden;
    }

    p{
        font-size: 1.5rem;
        line-height: 1.3;
        color: var(--secondary-texts-color);
    }

    .typing-animation{
        animation: blinkCursor 500ms steps(20) infinite normal, typing 5s steps(40) infinite normal both;
    }

    @keyframes typing {
        from{
            width: 0;
        }
        to{
            width: 400px;
        }
    }

    @keyframes blinkCursor{
        from{
            border-right-color: var(--main-texts-color);
        }
        to{
            border-right-color: transparent;
        }
    }

    .title::before{
        content: '';
        display: block;
        width: 130px;
        height: 100px;
        background: url('/src/assets/detalhe.svg') no-repeat center;
        position: absolute;
        top: -15px;
        left: -40px;
        z-index: -1;
    }



    @media(max-width: 1000px){
        .title, .fullstack{
            font-size: 3rem;
        }   
        .image{
            width: 250px;
            height: 250px;
        }
    }

    @media(max-width: 800px){
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        font-size: 2rem;
        .image{
            width: 200px;
            height: 200px;
        }

        .title::before{
            width: 40px;
            height: 10px;
            top: -10px;
            left: 0px;
        }

        @keyframes typing {
        from{
            width: 0;
        }
        to{
            width: 270px;
        }
    }
    @media(max-width: 600px){
        .image{
            width: 150px;
            height: 150px;
        }
    }

    @media(max-width: 500px){
        grid-template-columns: 1fr;
        
        .image{
            display: none;
        }
    }
    }
`