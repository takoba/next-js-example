import 'ress'
import { AppProps } from "next/app";
import {createGlobalStyle, ThemeProvider} from "styled-components":w

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`

const Theme = {}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
