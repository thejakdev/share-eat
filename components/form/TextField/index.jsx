//===============================================================================================================
// #1 - Import * React
//===============================================================================================================
import React from "react";

//==============================================================================================================
// #2 - Import * Styled Components
//===============================================================================================================
import { Main, WrapField, Append, Error } from "./styles";

export const TextField = React.forwardRef((props, ref) => (
    <Main>
        <label> {props.label} </label>
        <WrapField>
            <input type={props.type} placeholder={props.placeholder} {...props} pattern={props.pattern} />
            {props.append && (
                <Append>{props.append}</Append>
            )}
        </WrapField>
        {props.error && (
            <Error>{props.error}</Error>
        )}
    </Main>
))