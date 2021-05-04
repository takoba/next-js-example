import 'ress'
import { AppProps } from "next/app";
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { createMuiTheme } from "@material-ui/core"
import { ThemeProvider as MuiThemeProvider, StylesProvider } from "@material-ui/styles"
import GlobalStyles from "components/GlobalStyles"

const Theme = createMuiTheme()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={Theme}>
          <StyledThemeProvider theme={Theme}>
            <Component {...pageProps} />
          </StyledThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  )
}
