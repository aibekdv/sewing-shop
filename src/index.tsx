import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/store'
import App from './App'
import './styles/main.scss'
import { createTheme, ThemeProvider } from '@mui/material'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1315,
      xl: 1536,
    },
  },
})

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <Footer />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>,
)
