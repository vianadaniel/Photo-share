import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import UserCard from './UserCard'
import useRequestData from '../../hooks/useRequestData'
import Loading from '../../components/Loading/Loading'
import {  FeedContainer } from './styled'
import {  goToPhotoDetail } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'


const UserFeedPage = () => {
  useProtectedPage()
  const history = useHistory()
  const users = useRequestData([], '/users/all')
  

  const renderUsers = () => (
    users.map((item) => {
      return (
        <UserCard
          key={item.id}
          onClick={() => goToPhotoDetail(history, item.id)}
          subtitle={item.name}
          
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

export default UserFeedPage
