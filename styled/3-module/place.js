//===============================================================================================================
// #1 - Import * Styled Components
//===============================================================================================================
import styled from "styled-components";

export const WraperGrid = styled.section`
  margin-top: 16px;
`

export const WrapHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const Column = styled.div((props) => {

  const { theme } = props;
  const { media } = { ...theme };

  return `
    &:nth-child(1) {
      button {
        
        ${media("xs", `
          position: absolute;
          top: 5px;
          left: 10px;
        `)}

        ${media("md", `
          position: relative;
          top: -10px;
          left: auto;
        `)}
      }
    }
    &:nth-child(2) {
      margin-left: 10px;
    }
  `
})

export const WrapGridForm = styled.div `
  margin-top: 22px;

  ${({theme}) => theme.media("md", `
    margin-bottom: 22px;
  `)}
`