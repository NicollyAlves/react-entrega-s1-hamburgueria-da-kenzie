import styled from "styled-components";

export const AsideCart = styled.aside`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    position: relative;
    `
export const TituloCart = styled.h2`
    background-color: var(--Color-primary);
    color: var(--grey-0);
    font-size: 18px;
    padding: 10px;
    margin-top: 20px;
    border-radius: 8px 8px 0 0;
    min-width: 280px;
    width: 80vw;
    margin: 0 auto;
    display: flex;

    @media screen and (min-width: 950px) {
        width: 280px;
    }
    `

export const DivVazio = styled.div`
    display: flex;
    background-color: var(--grey-0);
    border-bottom: 2px solid var(--grey-20);
    min-width: 280px;
    padding: 10px;
    width: 80vw;
    margin: 0 auto;
    height: max-content;

    @media screen and (min-width: 950px) {
        width: 280px;
    }
`

export const SectionVazio = styled.section`
    display: none;
    flex-direction: column;
`