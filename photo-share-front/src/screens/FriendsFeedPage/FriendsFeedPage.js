import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import UserCard from './UserCard'

import Loading from '../../components/Loading/Loading'
import {  FeedContainer } from './styled'
import {  goToPhotoDetail } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'
import useRequestDataToken from '../../hooks/useRequestDataToken'


const FriendsFeedPage = () => {
  useProtectedPage()
  const history = useHistory()
  const users = useRequestDataToken([], '/users/friends')
  

  const renderUsers = () => (
    users.map((item) => {
      return (
        <UserCard
          key={item.id}
          onClick={() => goToPhotoDetail(history, item.id)}
          name={item.name}
          
        />
      )
    })
  )
  return (
    <>
      <FeedContainer>
         
        {users.length > 0 ? renderUsers() : <Loading/>}
      </FeedContainer>
      

    </>
  )
}

export default FriendsFeedPage
