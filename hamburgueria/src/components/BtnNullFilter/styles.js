import styled from "styled-components";

export const Button = styled.button`
    display: none;

    @media screen and (min-width: 569px) {
        display: flex;
        width: max-content;
        height: max-content;
        padding: 10px;
        justify-content: center;
        align-items: center;
        margin: 25px;

        background-color: var(--Color-primary);
        color: var(--grey-0);
        border-radius: 8px;
    }
`