import styled from "styled-components";

export const ExperienceStyled = styled.section`
    padding: 40px 20px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 100px;

    .subtitle{
        color: #E0E0E0;
    }

    .experience-text{
        font-size: 1.5rem;
        line-height: 1.33;
        max-width: 50ch;
        margin-bottom: 60px;
        color: #525252;
    }
    .experience-text strong{
        color: #141414;
    }

    @media (max-width: 800px){
        grid-template-columns: 1fr;
        gap: 40px;

        .subtitle{
            color: #141414;
        }

        .experience-text{
            font-size: 1.25rem;
        }
    }
        
`