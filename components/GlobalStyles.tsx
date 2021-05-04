import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', sans-serif;
    ${tw`antialiased`}
  }
`

const GlobalStyles = () => (
  <>
    <CustomStyles />
  </>
)

export default GlobalStyles
