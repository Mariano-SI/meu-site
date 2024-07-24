import styled from "styled-components";

export const FormationCardStyled = styled.div`
    background-color: var(--subtitle-color);
    padding: 20px;
    border-radius: 4px;
    flex: 1;
    display: flex;
    flex-direction: column;

    .formation-level{
        color: var(--secondary-texts-color);
        font-size: large.875rem;
        text-transform: uppercase;
        margin-bottom: 10px;
        display: inline-block;
    }

    .formation-title{
        font-size: 1.125rem;
        line-height: 1.4;
        margin-bottom: 40px;
        position: relative;
        color: var(--main-texts-color);
        flex: 1;
    }

    .formation-title::before{
        content: "";
        display: block;
        width: 4px;
        height: 20px;
        background: linear-gradient(var(--primary-color), var(--secondary-color));
        position: absolute;
        left: -24px;
    }

    .formation-institution{
        font-size: 1.125rem;
        color: var(--secondary-texts-color);
    }


`