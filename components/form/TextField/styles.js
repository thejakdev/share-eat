//===============================================================================================================
// #1 - Import * Styled Components
//===============================================================================================================
import styled from "styled-components";

export const Main = styled.div`
    label {
        display: block;
        color: white;
        font-weight: ${({theme}) => theme.fontWeight.fw400};
        font-family: ${({theme}) => theme.font.nunito};
        font-size: 0.875rem;
        margin-bottom: 0.25rem;
    }

    input {
        width: 100%;
        background-color: ${({theme}) => theme.color.white};
        border: 0;
        height: 38px;
        font-size: 15px;
        padding-left: 0.75rem;
        color: ${({theme}) => theme.color.black};

        &::placeholder {
            color: ${({theme}) => theme.color.silver};
        }
    }
    `;

export const WrapField = styled.div`
    border: 1px solid #DEDEDF;
    overflow: hidden;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: row-reverse;
    position: relative;
`

export const Append = styled.div`
    overflow: hidden;
    height: 40px;
    background-color: ${({theme}) => theme.color.white};
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 28px;
    min-width: 22px;
    padding-left: 10px;
`
export const Error = styled.span`
    display: block;
    color: ${({theme}) => theme.color.red};
    font-weight: ${({theme}) => theme.fontWeight.fw700};
    font-size: 12px;
`

