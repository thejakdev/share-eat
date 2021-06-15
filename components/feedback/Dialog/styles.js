//===============================================================================================================
// #1 - Import * Styled Components
//===============================================================================================================
import styled from "styled-components";

export const Header = styled.div((props) => {

    const { theme } = props;
    const { color, media } = { ...theme };

    return `
        background-color: ${color.gray};
        position: relative;
        height: 60px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        button {
            position: absolute;
            
            ${media("xs", `
                left: 10px;
                top: 4px;
            `)}
                
            ${media("md", `
                left: auto;
                right: 0;
            `)}
        }
    `
});

export const HeaderLogo = styled.div `

`