import { BrowserRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import React from 'react'
import { ThemeProvider } from '@material-ui/styles'

import MainRouter from './MainRouter'
import theme from './theme'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </BrowserRouter>
  )
}

// export as a higher-order-component (hoc)
// enables hot reloading during development
export default hot(module)(App)
