import styled from "styled-components";

export const FooterStyled = styled.footer`

    .container{
        padding: 120px 20px 60px 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 100px;
        align-items: center;
    }

    .footer-text{
        font-size: 1.5rem;
        line-height: 1.33;
        color: var(--secondary-texts-color);
    }

    .footer-contact li{
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 30px;
    }

    .footer-contact li:hover{
        cursor: pointer;
    }
    .footer-contact svg{
        font-size: 2.25rem;
        color: var(--primary-color);
    }
    .footer-contact li a{
        color: var(--main-texts-color);
        font-weight: bold;
        font-size: 2rem;
        text-decoration: none;
    }

    .footer-copy{
        font-size: 1.125rem;
        color: #8F8F8F;
        grid-column: 1 / -1;
        text-align: center;
    }

    @media (max-width: 800px){
        .container{
            grid-template-columns: 1fr;
            gap: 40px;
        }

        .footer-contact li a{
            font-size: 1.5rem;
        }
    }
`