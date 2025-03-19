import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Router } from './components/Router'
import { defaultTheme } from './styles/themes/defaultTheme'
import { GlobalStyle } from './STYLES/global/global'
import { BrowserRouter } from 'react-router-dom'


import { CartProvider } from './context/cartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <Router />
        </CartProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
