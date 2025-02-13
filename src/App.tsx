import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './STYLES/themes/defaultTheme'
import { GlobalStyle } from './STYLES/global/global'


export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}
