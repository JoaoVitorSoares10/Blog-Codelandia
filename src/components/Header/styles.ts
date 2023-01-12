import Styled from "styled-components";

export const Container = Styled.header`
    background: var(--linear);
    height: 100px;

    padding: 2rem 1rem;
`;

export const Content = Styled.div`
    margin: auto;

    max-width: 900px;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const TitleBox = Styled.div`
    display: flex;
    justify-content: space-between;

    h1, a {
        color: var(--white);
        font-size: 1.5rem;
    }

    a {
        text-decoration: none;
        font-size: 1.5rem;
    }
`;

export const SearchBox = Styled.div`
    position: relative;

    background: rgba(255,255,255, 0.1);

    img {
        width: 20px;

        position: absolute;
        top:50%;
        bottom:50%;
        left:22px;
        transform: translate(-50%, -50%);

        cursor: pointer;

        transition: all ease 0.5s;

        &:hover {
            width: 25px;
        }
    }

    input {
        font-family: 'Inter', sans-serif;

        background: none;
        color: white;
        border: none;
        outline: none;

        width: 100%;
        
        padding: 1rem 1rem 1rem 2.6rem;
    }

    input::placeholder {
        color: var(--text);
    }
`;