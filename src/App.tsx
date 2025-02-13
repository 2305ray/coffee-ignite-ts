import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './STYLES/themes/defaultTheme'
import { GlobalStyle } from './STYLES/global/global'
import React from 'react'


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}
