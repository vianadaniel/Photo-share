import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { useHistory } from 'react-router-dom'
import { goToLogin, goToRecipesFeed } from '../../routes/Coordinator'
import Button from '@material-ui/core/Button'
import { AppBarTitle, ButtonsContainer } from './styled'
import { Restaurant } from '@material-ui/icons'
import Typography from '@material-ui/core/Typography'

const MainAppBar = (props) => {
  const {buttonName, setButtonName} = props
  const history = useHistory()

  const logout = () => {
    localStorage.removeItem('token')
  }

  const appBarAction = () => {
    const token = localStorage.getItem("token")
    if (token){
      logout()
      setButtonName('Login')
    }
    goToLogin(history)
  }

  return (
    <AppBar>
      <Toolbar>
        <ButtonsContainer>
          <Button color={"inherit"} onClick={() => goToRecipesFeed(history)}>
            <Restaurant />
            <AppBarTitle variant={'h6'}>Cookenu</AppBarTitle>
          </Button>
          <Button color={"inherit"} onClick={appBarAction}>
            <Typography variant={'h6'}>{buttonName}</Typography>
          </Button>
        </ButtonsContainer>
      </Toolbar>
    </AppBar>
  )
}

export default MainAppBar
