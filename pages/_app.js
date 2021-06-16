//===============================================================================================================
// #1 - Import * Header
//===============================================================================================================
import Header from "../components/patterns/Header";

//===============================================================================================================
// #2 - Import * Next Head
//===============================================================================================================
import Head from 'next/head';

//===============================================================================================================
// #2 - Import * Styled Components
//===============================================================================================================
import { ThemeProvider } from "styled-components";

//===============================================================================================================
// #4 - Import Styles
//===============================================================================================================
import { GlobalStyles } from "../styled/1-base/global";
import { base } from "../styled/1-base";

//===============================================================================================================
// #5 - Building Style Object
//===============================================================================================================
const theme = { ...base }

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&family=Poppins:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp;
