import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Router } from './components/Router'
import { defaultTheme } from './styles/themes/defaultTheme'
import { GlobalStyle } from './styles/global/global'

import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
