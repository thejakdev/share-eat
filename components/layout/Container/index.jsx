//===============================================================================================================
// #1 - Import * React
//===============================================================================================================
import React from "react";

//===============================================================================================================
// #2 - Import * Styled Components
//===============================================================================================================
import { Main } from "./styles"

export const Container = ({ children }) => {

    return (
        <Main>
            {children}
        </Main>
    )
}