import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from '../screens/LoginPage/LoginPage'
import SignUpPage from '../screens/SignUpPage/SignUpPage'
import RecipesFeedPage from '../screens/RecipesFeedPage/RecipesFeedPage'
import RecipeDetailPage from '../screens/RecipeDetailPage/RecipeDetailPage'
import AddRecipePage from '../screens/AddRecipePage/AddRecipePage'
import ErrorPage from '../screens/ErrorPage/ErrorPage'

const Router = (props) => {
  return(
      <Switch>
        <Route exact path={'/login'}>
          <LoginPage setButtonName={props.setButtonName}/>
        </Route>
        <Route exact path={'/signup'}>
          <SignUpPage setButtonName={props.setButtonName}/>
        </Route>
        <Route exact path={['/receitas', '/']}>
          <RecipesFeedPage/>
        </Route>
        <Route exact path={'/receitas/:id'}>
          <RecipeDetailPage/>
        </Route>
        <Route exact path={'/adicionarReceita'}>
          <AddRecipePage/>
        </Route>
        <Route>
          <ErrorPage/>
        </Route>
      </Switch>
  )
}

export default Router
