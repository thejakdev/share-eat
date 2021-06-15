//===============================================================================================================
// #1 - Import * Styled Components
//===============================================================================================================
import styled from "styled-components";

export const Main = styled.div((props) => {

    const { theme } = props;
    const { color } = { ...theme };

    return `
    text-align: left;
    background-color: ${color.transparent};
    color: ${color.white};
`
}) 

export const Columns = styled.div((props) => {

    const { theme } = props;
    const { color, media } = { ...theme };

    return `
        display: flex;
        justify-content: space-between;
        position: relative;

        ${media("xs", `
            align-items: center;
        `)}

        ${media("md", `
            align-items: flex-start;
            min-height: 220px;
            background-color: ${color.blackLight};
            border-radius: 0.5rem;
            -webkit-box-shadow: 0 4px 16px 0 rgba(0,0,0,0.29);
            box-shadow: 0 4px 16px 0 rgba(0,0,0,0.29);
        `)}
    `
}) 
export const Column = styled.div `
    &:nth-child(1) {
        background-color: ${({theme}) => theme.color.blackLight};
        padding: 0.75rem 1.0625rem;
        border-radius: 0.5rem;
        width: 100%;
        cursor: pointer;
    }

    &:nth-child(2) {
        min-width: 36px;
        margin-left: 20px;
    }
`;

export const Button = styled.button((props) => {
    const { theme } = props;
    const { color, media } = { ...theme };

    return `
        height: 36px;
        width: 36px;
        min-width: 36px;
        border-radius: 100%;
        background-color: ${color.transparent};
        border: 0.0938rem solid ${color.white};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        img {
            width: 12px;
        }

        ${media("md", `
            position: absolute;
            bottom: 0.9375rem;
            right: 0.9375rem;
        `)}
    `
}) 