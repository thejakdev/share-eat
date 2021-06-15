//===============================================================================================================
// #1 - Import * Styled Components
//===============================================================================================================
import styled from "styled-components";

export const Main = styled.div `
    text-align: left;
`

export const Title = styled.h1 `
    text-align: ${({textAlign}) => textAlign ? textAlign : "left"};
    font-size: ${({fontSize}) => fontSize ? fontSize : "1rem"};
    font-weight: ${({ theme }) => theme.fontWeight.fw700};
    color: ${props => props.color};
`