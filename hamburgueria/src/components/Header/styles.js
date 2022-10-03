import styled from "styled-components"

export const DivHeader = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: max-content;
    flex-direction: column;
    padding: 10px;
    background-color: var(--grey-0);

    @media screen and (min-width: 569px){
        flex-direction: row;
        justify-content: space-around;
    }

    img {
        margin-bottom: 20px;
        margin-top: 10px;
    }

    form {
        display: flex;
        flex-direction: row;
        width: 95%;
        justify-content: center;
        align-items: center;
        position: relative;
        margin: 0 auto;
    }
    `

export const InputText = styled.input`
    display: flex;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    height: 50px;
    width: 300px;
    color: var(--grey-50);
`

export const InputBtn = styled.input`
    display: flex;
    height: 35px;
    position: absolute;
    right: 10px;
    padding: 10px;
    border-radius: 8px;
    background-color: var(--Color-primary);
    color: var(--white);
`