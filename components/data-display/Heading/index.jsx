//===============================================================================================================
// #1 - Import * React
//===============================================================================================================
import React from "react";

//===============================================================================================================
// #2 - Import * Styled Components
//===============================================================================================================
import { Main, Title } from "./styles"

export const Heading = ({ title, textAlign, fontSize, color, className }) => {

    return (
        <Main className={className}>
            <Title color={color ? color : "#FFFFFF"} textAlign={textAlign} fontSize={fontSize} >
                {title}
            </Title>
        </Main>
    )
}