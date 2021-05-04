import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet as StyledServerStyleSheet } from 'styled-components'
import { ServerStyleSheets as MuiServerStyleSheets } from "@material-ui/styles"

export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const styledSheet = new StyledServerStyleSheet()
    const materialUiSheets = new MuiServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledSheet.collectStyles(
              materialUiSheets.collect(<App {...props} />)
            ),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {styledSheet.getStyleElement()}
            {materialUiSheets.getStyleElement()}
          </>
        ),
      }
    } finally {
      styledSheet.seal()
    }
  }

  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}
