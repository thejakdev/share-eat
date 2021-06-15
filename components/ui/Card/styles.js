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
    -webkit-box-shadow: 0 4px 16px 0 rgba(0,0,0,0.29);
        box-shadow: 0 4px 16px 0 rgba(0,0,0,0.29);
    overflow: hidden;

`
}) 

export const Columns = styled.div((props) => {

    const { theme } = props;
    const { color, media } = { ...theme };

    return `
        position: relative;
        background-color: ${color.blackLight};
        border-radius: 0.5rem;
        
        position:relative;
        
        ${media("md", `
            min-height: 220px;
        `)}

        &::before {
            content: "";
            display: block;
            height: 100%;
            width: 4px;
            background-color: ${color.yellow};
            position: absolute;
            left: 0;
            top: 0;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
        }
    `
}) 
export const Column = styled.div `
        padding: 0.75rem 1.0625rem;
        &:nth-child(1) {
            padding-bottom: 0;
            background-color: ${({theme}) => theme.color.blackLight};
            border-radius: 0.5rem;
            width: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &:nth-child(2) {
            /* padding-top: 0; */
        }
`;
