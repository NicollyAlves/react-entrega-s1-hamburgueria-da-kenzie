import styled from "styled-components";

export const DivTotal = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--grey-0);
    min-width: 280px;
    padding: 10px;
    margin: 0 auto;
    width: 80%;

    @media screen and (min-width: 950px) {
        width: 30%;
    }

    button {
        background-color: var(--grey-20);
        color: var(--grey-50);
        font-size: 14px;
        font-weight: 600;
        padding: 10px;
        width: 280px;
        margin: 0 auto;
        border-radius: 8px;
        margin-bottom: 10px;
    }
`
export const DivText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    margin-top: 10px;
    font-weight: 600;

    div {
        color: var(--gray-100);
    }

    p {
        color: var(--grey-50);
    }
`