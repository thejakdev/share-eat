//===============================================================================================================
// #1 - Import * React
//===============================================================================================================
import React from "react";

//==============================================================================================================
// #2 - Import * Styled Components
//===============================================================================================================
import { Main, MainButton, WrapDefaultButton, DefaultButton } from "./styles";

export const Button = ({ buttonColor, type, text, disabled }) => {

    return (
        <WrapDefaultButton>
            <DefaultButton type={type} text={text} buttonColor={buttonColor} disabled={disabled ? disabled : false} >
                {text}
            </DefaultButton>
        </WrapDefaultButton>
    )
}

export const ButtonIcon = ({ buttonColor, onClick, children }) => {

    return (
        <Main buttonColor={buttonColor} onClick={onClick}>
            {children}
        </Main>
    )
}

export const ButtonAdd = ({ buttonColor, onClick }) => {
    return (
        <MainButton buttonColor={buttonColor} onClick={onClick}>
            <img src="/images/icon-plus-black.png" />
        </MainButton>
    )
}