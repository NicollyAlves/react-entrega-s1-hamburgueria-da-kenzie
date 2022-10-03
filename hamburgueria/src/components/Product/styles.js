import styled from "styled-components";

export const ProductsLi = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    border: 2px solid var(--grey-0);
    width: 250px;
    margin: 0 auto;
    margin-top: 20px;
    height: 290px;
    margin-right: 20px;

    img{
        width: 150px;
        height: 130px;
        background-color: var(--grey-0);
    }
`
export const DivImg = styled.div`
    display: flex;
    justify-content: center;
    width: 250px;
    height: 130px;
    align-items: center;
    background-color: var(--grey-0);
`
export const DivContent = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 30px;
    margin-top: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 90%;

    h2 {
        font-size: 18px;
        color: var(--gray-100);
    }

    span {
        font-weight: 600;
        color: var(--grey-50);
    }

    p {
        font-weight: 600;
        color: var(--Color-primary);
    }

    button {
        display: flex;
        height: 35px;
        padding: 10px;
        margin-top: 10px;
        border-radius: 8px;
        background-color: var(--Color-primary);
        color: var(--white);
    }
`