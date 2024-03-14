import React from 'react'
import ReactDOM from 'react-dom/client'


import { ThemeProvider } from 'styled-components'
import { Routes } from './routes'

import { AuthProvider } from './hooks/auth'

import theme from './styles/theme.js'
import GlobalStyles from './styles/global.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
