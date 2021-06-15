//===============================================================================================================
// #1 - Import * React
//===============================================================================================================
import React from "react";

//===============================================================================================================
// #2 - Import * Next Router
//===============================================================================================================
import { useRouter } from 'next/router'

import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Heading } from "../../data-display/Heading";
import { Paragraph } from "../../data-display/Typography";

//===============================================================================================================
// #2 - Import * Styled Components
//===============================================================================================================
import { Main, Columns, Column, Button } from "./styles"

export const CardList = ({ title, text, url, onClick }) => {

    const matches = useMediaQuery('(min-width:600px)');

    const router = useRouter();

    return (
        <Main>
            <Columns>
                <Column onClick={() => router.push(url ? url : "#undefined-route")}>
                    <Heading title={title} color="#FFFFFF" textAlign="left" fontSize={matches ? "2.25rem" : "1rem"} fontWeight="400" />
                    <Paragraph color="#FFFFFF" textAlign="left" fontSize="1rem">
                        {text}
                    </Paragraph>
                </Column>
                <Column>
                    <Button onClick={onClick}>
                        <img src="/images/icon-plus.png" />
                    </Button>
                </Column>
            </Columns>
        </Main>
    )
}