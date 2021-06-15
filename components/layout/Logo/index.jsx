//===============================================================================================================
// #1 - Import * React
//===============================================================================================================
import React from "react";

//===============================================================================================================
// #2 - Import * Next Router
//===============================================================================================================
import { useRouter } from 'next/router'

//===============================================================================================================
// #2 - Import * Next Image
//===============================================================================================================
import Image from 'next/image'

//===============================================================================================================
// #2 - Import * Styled Components
//===============================================================================================================
import { Main } from "./styles"

export const Logo = () => {

    // * Next Router
    const router = useRouter();

    return (
        <Main onClick={() => router.push("/")}>
            <Image src="/images/logo.svg" width={96} height={18} layout="intrinsic" />
        </Main>
    )
}