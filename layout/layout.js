import { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../contexts/useTheme";

const lightTheme = `:root {
    --black: #242423;
    --black-light: #333533;
    --yellow: #F5CB5C;
    --grey: #CFDBD5;
    --grey-light: #E8EDDF;
    --white: #FFFFFF;
 }`

const darkTheme = `:root {
    --black: #E8EDDF;
    --black-light: #E8EDDF;
    --yellow: #F5CB5C;
    --grey: #CFDBD5;
    --grey-light: #333533;
    --white: #242423;
 }`

export default function Layout({ children }) {
    const { theme } = useContext(ThemeContext);

    return <>
        <Navbar />
        <main>{children}</main>
        <Footer />

        <style jsx>{`
        main {
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 16px;
        }
    `}</style>

        <style global jsx>{`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
      scroll-behavior: smooth;
  }

    body {
        font-family: sans-serif;
        font-size: 100%;
        font-weight: normal;
        color: var(--black);
        background-color: var(--white);
       }

       ul, li {
        list-style: none;
        margin: 0;
        padding: 0;
       }

       a {
        text-decoration: none;
       }

       h1{
        font-size: 34px;
        font-weight: bold;
       }

       h2 {
        font-size: 26px;
        font-weight: bold;
       }

       p {
        font-size: 16px;
        line-height: 1.5;
        color: var(--black-light);
       }

       ${theme === "light" ? lightTheme : darkTheme}
      `}</style>
    </>
}   
