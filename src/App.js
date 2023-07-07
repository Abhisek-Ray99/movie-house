import React from 'react'
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from './pages/Home'
import Show from './pages/Show'
import NotFound from './pages/NotFound'

const theme = {
  mainColors: {
    blue: '#FF8516',
    gray: '#c6c6c6',
    dark: '#353535',
  },
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/show/:id" element={ <Show/> } />
          <Route path='*' element={ <NotFound/>  } />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App