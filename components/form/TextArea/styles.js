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

    textarea {
        width: 100%;
        background-color: ${({theme}) => theme.color.white};
        border: 0;
        height: 136px;
        resize: none;
        font-size: 15px;
        padding: 0.5rem 0.75rem;
        font-family: ${({theme}) => theme.font.nunito};
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

export const Error = styled.span`
    display: block;
    color: ${({theme}) => theme.color.red};
    font-weight: ${({theme}) => theme.fontWeight.fw700};
    font-size: 0.75rem;
`

export const InfoField = styled.span`
    display: block;
    color: ${({theme}) => theme.color.white};
    font-weight: ${({theme}) => theme.fontWeight.fw300};
    font-family: ${({theme}) => theme.font.nunito};
    font-size: 0.875rem;
    margin-top: 0.1875rem;
`

