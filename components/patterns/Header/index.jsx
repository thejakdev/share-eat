//===============================================================================================================
// #1 - Import * React
//===============================================================================================================
import React from "react";

//==============================================================================================================
// #2 - Import * UI Components
//===============================================================================================================
import { Logo } from "../../layout/Logo";

//==============================================================================================================
// #2 - Import * Styled Components
//===============================================================================================================
import { Main } from "./styles";

function Header() {

    return (
        <Main>
            <Logo />    
        </Main>
    )
}

export default Header;