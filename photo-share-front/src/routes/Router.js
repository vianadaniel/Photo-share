import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from '../screens/LoginPage/LoginPage'
import SignUpPage from '../screens/SignUpPage/SignUpPage'
import PhotosFeedPage from '../screens/PhotosFeedPage/PhotosFeedPage'
import PhotoDetailPage from '../screens/PhotoDetailPage/PhotoDetailPage'
import AddPhotoPage from '../screens/AddPhotoPage/AddPhotoPage'
import ErrorPage from '../screens/ErrorPage/ErrorPage'
import CollectionsFeedPage from '../screens/CollectionsPage/CollectionsFeedPage'
import CollectionsDetailPage from '../screens/CollectionsDetailPage/CollectionsDetailPage'
import AddCollectionPage from '../screens/AddColectionPage/AddCollectionPage'
import UsersFeedPage from '../screens/UsersFeedPage/UsersFeedPage'
import FriendsFeedPage from '../screens/FriendsFeedPage/FriendsFeedPage'

const Router = (props) => {
  return(
      <Switch>
        <Route exact path={'/login'}>
          <LoginPage setButtonName={props.setButtonName}/>
        </Route>
        <Route exact path={'/signup'}>
          <SignUpPage setButtonName={props.setButtonName}/>
        </Route>
        <Route exact path={['/photos', '/']}>
          <PhotosFeedPage/>
        </Route>
        <Route exact path={'/photo/:id'}>
          <PhotoDetailPage/>
        </Route>
        <Route exact path={'/addphoto'}>
          <AddPhotoPage/>
        </Route>
        <Route exact path={'/collections'}>
          <CollectionsFeedPage/>
        </Route>
        <Route exact path={'/collections/:collection'}>
          <CollectionsDetailPage/>
        </Route>
        <Route exact path={'/addcollection'}>
          <AddCollectionPage/>
        </Route>
        <Route exact path={'/users'}>
          <UsersFeedPage/>
        </Route>
        <Route exact path={'/friends'}>
          <FriendsFeedPage/>
        </Route>
        <Route>
          <ErrorPage/>
        </Route>
      </Switch>
  )
}

export default Router
