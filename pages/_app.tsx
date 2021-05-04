import 'ress'
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components"
import GlobalStyles from "components/GlobalStyles"

const Theme = {}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
