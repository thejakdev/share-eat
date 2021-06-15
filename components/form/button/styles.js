//===============================================================================================================
// #1 - Import * Styled Components
//===============================================================================================================
import styled from "styled-components";

export const WrapDefaultButton = styled.div`
    text-align: center;
`;
export const DefaultButton = styled.button`
    width: 100%;
    max-width: 320px;
    background-color: ${({buttonColor}) => buttonColor};
    border: 0.0625rem solid ${({buttonColor}) => buttonColor};
    font-family: ${({theme}) => theme.font.poppins};
    font-weight: ${({theme}) => theme.fontWeight.fw700};
    font-size: 1rem;
    border-radius: 5px;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0 auto;
    padding: 0.55rem 0.9375rem;

    img {
        ${({theme}) => theme.media("xs", `
            width: 8px;
        `)}

        ${({theme}) => theme.media("md", `
            width: 10px;
        `)}
    }

    img.close-icon {
        width: 14px;
    }
`;

export const Main = styled.button`
    height: 48px;
    width: 48px;
    min-width: 48px;
    background-color: ${({buttonColor}) => buttonColor};
    border-radius: 5px;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
        ${({theme}) => theme.media("xs", `
            width: 8px;
        `)}

        ${({theme}) => theme.media("md", `
            width: 10px;
        `)}
    }

    img.close-icon {
        width: 14px;
    }
`;

export const MainButton = styled.button`
    height: 64px;
    width: 64px;
    min-width: 64px;
    background-color: ${({buttonColor}) => buttonColor};
    border-radius: 100%;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99;

    img {
        width: auto;
    }
`;