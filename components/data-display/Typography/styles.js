//===============================================================================================================
// #1 - Import * Styled Components
//===============================================================================================================
import styled from "styled-components";

export const Main = styled.p `
    text-align: ${({textAlign}) => textAlign ? textAlign : "left"};
    font-size: ${({fontSize}) => fontSize ? fontSize : "1rem"};
    font-weight: ${({ theme }) => theme.fontWeight.fw300};
    color: ${props => props.color};
    font-family: ${({ theme }) => theme.font.nunito};
`;