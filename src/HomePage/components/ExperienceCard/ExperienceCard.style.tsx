import styled from "styled-components";

export const ExperienceCardStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 20px;
    padding: 20px;
    background-color: var(--background-cards);
    margin-bottom: 20px;
    border-radius: 4px;
    position: relative;

    &::before{
        content: '';
        position: absolute;
        top: 20px;
        left: -4px;
        display: block;
        width: 4px;
        height: 20px;
        background: linear-gradient(var(--primary-color), var(--secondary-color));
    }

    .job-date{
        position: absolute;
        top: 22px;
        left: -140px;
        color: var(--secondary-texts-color);
        font-size: large.875rem;
        text-align: right;
        width: 130px;
    }

    .company-name{
        font-size: 1.125rem;
        line-height: 1.1;
        font-weight: bold;
        color: var(--main-texts-color);
    }
    .company-role{
        font-size: 1rem;
        line-height: 1.1;
        font-weight: bold;
        color: var(--main-texts-color);
    }

    .job-description{
        font-size: large.875rem;
        color: var(--secondary-texts-color);
        line-height: 1.4;
    }

    .job-skills{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-content: start;
    }

    .job-skills li{
        font-size: .875rem;
        line-height: 1.4;
        border-radius: 4px;
        display:inline-block;
        background-color: var(--background-color);
        color: var(--secondary-texts-color);
        padding: 5px 10px;
    }

    .images-container{
        display: flex;
        gap: 26px;
    }

    .company-image{
        width: 60px;
        height: 60px;
    }
    .company-image img{
        max-width: 100%;
        object-fit: cover;
    }

    @media (max-width: 800px){
        .job-date{
            position: initial;
            order: 1;
            width: initial;
            text-align: left;
        }
        .job-date::before{
            content: 'Ano: ';
        }
    }

    @media (max-width: 400px){
        grid-template-columns: 1fr 1fr;
    }

  
`