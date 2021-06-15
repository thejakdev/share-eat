//===============================================================================================================
// #1 - Import * React
//===============================================================================================================
import React from "react";

//==============================================================================================================
// #2 - Import * Styled Components
//===============================================================================================================
import { Main, WrapField, InfoField, Error } from "./styles";

export const TextArea = React.forwardRef((props, ref) => (
    <Main>
        <label>{props.label}</label>
        <WrapField>
            <textarea placeholder={props.placeholder} {...props} />
        </WrapField>
        <InfoField>*A descrição deve conter até 200 caracteres.</InfoField>
        {props.error && (
            <Error>{props.error}</Error>
        )}
    </Main>
))