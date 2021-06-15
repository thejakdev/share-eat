//===============================================================================================================
// #1 - Import * Styled Components
//===============================================================================================================
import styled from "styled-components";

export const Main = styled.div `
    background-color: ${({theme}) => theme.color.transparent};
    cursor: pointer;
`