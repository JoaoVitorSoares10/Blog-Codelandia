import Styled from "styled-components";

export const Container = Styled.div`
    background: var(--white);
    padding: 1rem;

    margin: 1rem 0px;
`;

export const CardInfo = Styled.div`
    display: flex;
    justify-content: space-between;

    padding-bottom: 1rem;

    img {
        width: 1.3rem;
        height: 1.3rem;
    }

    p{
        font-size: 1rem;
        color: var(--text);
    }
`;

export const CardData = Styled.div`
    cursor: pointer;

    h2 {
        font-size: 1.25rem;
        color: var(--title);

        padding-bottom: 0.3rem;
    }

    article {
        font-size: 1rem;
        color: var(--text);
    }
`;