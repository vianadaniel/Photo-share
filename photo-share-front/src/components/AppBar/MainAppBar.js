import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { useHistory } from 'react-router-dom'
import { goToLogin, goToCollectionsFeed, goToUsers } from '../../routes/Coordinator'
import Button from '@material-ui/core/Button'
import { AppBarTitle, ButtonsContainer } from './styled'
import { Photo, PhotoLibrary, PersonAdd, People } from '@material-ui/icons'
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
        <div>
          <Button color={"inherit"} onClick={() => goToLogin(history)}>
            <Photo />
            <AppBarTitle variant={'h6'}>Photo Share</AppBarTitle>
            </Button>
            <Button color={"inherit"} onClick={() => goToCollectionsFeed(history)}>
            <PhotoLibrary />
            <AppBarTitle variant={'h6'}>Collections</AppBarTitle>
            </Button>
            </div>
            <div>
            <Button color={"inherit"} onClick={() => goToUsers(history)}>
            <PersonAdd />
            <AppBarTitle variant={'h6'}>Users</AppBarTitle>
            </Button>
            <Button color={"inherit"} onClick={() => goToCollectionsFeed(history)}>
            <People />
            <AppBarTitle variant={'h6'}>Friends</AppBarTitle>
            </Button>
          <Button color={"inherit"} onClick={appBarAction}>
            <Typography variant={'h6'}>{buttonName}</Typography>
          </Button>
            </div>
        </ButtonsContainer>
      </Toolbar>
    </AppBar>
  )
}

export default MainAppBar
