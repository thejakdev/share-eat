//===============================================================================================================
// #1 - Import * React
//===============================================================================================================
import React from "react";

//===============================================================================================================
// #2 - Import * Material UI
//===============================================================================================================
import useMediaQuery from '@material-ui/core/useMediaQuery';

//===============================================================================================================
// #3 - Import * UI Components
//===============================================================================================================
import { Heading } from "../../data-display/Heading";
import { Paragraph } from "../../data-display/Typography";

//===============================================================================================================
// #4 - Import * Styled Components
//===============================================================================================================
import { Main, Columns, Column, Button } from "./styles"

export const Card = ({ title, price, text }) => {

    const matches = useMediaQuery('(min-width:600px)');

    return (
        <Main>
            <Columns>
                <Column>
                    <Heading title={title} color="#FFFFFF" textAlign="left" fontSize={matches ? "1.75rem" : "1rem"} fontWeight="400" />
                    <Heading title={price} color="#FFFFFF" textAlign="left" fontSize={matches ? "1.5rem" : "1rem"} fontWeight="400" className="price" />
                </Column>
                <Column>
                    <Paragraph color="#FFFFFF" textAlign="left" fontSize="0.9375rem">
                        {text}
                    </Paragraph>
                </Column>
            </Columns>
        </Main>
    )
}