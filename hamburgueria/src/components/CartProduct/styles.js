import styled from "styled-components";

export const UlProductsCart = styled.ul`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    height: 200px;
    min-width: 280px;

    li {
        height: 120px;
        display: flex;
        margin-top: 5px;
        min-width: 270px;
        width: 80vw;
        
        @media screen and (min-width: 950px) {
            min-width: 260px;
            width: 260px;
        }
    }


    img {
        width: 70px;
        height: 70px;
        background-color: var(--grey-20);
        border-radius: 8px;
        margin: 10px;
    }

    h2 {
        color: var(--gray-100);
        font-size: 16px;
        margin: 10px 10px 10px 0;
    }

    span {
        color: var(--grey-50);
        font-size: 12px;
    }

    button {
        font-size: 12px;
        font-weight: 600;
        color: var(--grey-50);
        height: max-content;
        padding: 2px;
        background-color: var(--grey-0);
        margin: 10px;
        display: flex;
        justify-content: end;
    }
`

export const DivContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 80vw;
`