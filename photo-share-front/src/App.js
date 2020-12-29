import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './constants/theme'
import Router from './routes/Router'
import { BrowserRouter } from 'react-router-dom'
import MainAppBar from './components/AppBar/MainAppBar'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InnerScreenContainer = styled.div`
  padding-top: 64px;
`

const App = () => {
  const token = localStorage.getItem('token')
  const [buttonName, setButtonName] = useState(token ? 'Logout' : 'Login')
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainAppBar buttonName={buttonName} setButtonName={setButtonName}/>
        <InnerScreenContainer>
          <Router setButtonName={setButtonName}/>
          <ToastContainer autoClose={3000} />
        </InnerScreenContainer>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
