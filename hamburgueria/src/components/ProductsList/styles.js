import styled from "styled-components";

export const ProductsUl = styled.ul`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    overflow: auto;
    min-width: 290px;
    padding: 10px;
    width: 80%;
    margin-top: -15px;

    @media screen and (min-width:950px) {
        width: 85%;
        flex-wrap: wrap;
        overflow: none;
        margin: 0 auto;
        margin-top: -20px;
    }
`