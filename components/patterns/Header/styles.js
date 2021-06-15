//===============================================================================================================
// #1 - Import * Styled Components
//===============================================================================================================
import styled from "styled-components";

export const Main = styled.header((props) => {

    const { theme } = props;
    const { color, media } = { ...theme };

    return `
        background-color: ${color.black};
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        ${media("xs", `
            height: 60px;
        `)}

        ${media("md", `
            height: 100px;
        `)}
    `
}) 