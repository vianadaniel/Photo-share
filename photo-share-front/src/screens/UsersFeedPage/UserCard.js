import React from 'react'
import { useHistory } from 'react-router-dom'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {  UserCardContent } from './styled'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { FeedContainer } from '../PhotosFeedPage/styled'
import {goToFriendsFeed} from '../../routes/Coordinator'
import {toast} from 'react-toastify'
const UserCard = (props) => {
  const history = useHistory();
  const handleAddFriend = async() => {
    try {
      await axios.put(`${BASE_URL}/users/follow/${props.id}`,null, {
        headers: 
        {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem('token')
        }
      })

      toast.success('Add friend')
      
      goToFriendsFeed(history)
      } catch(err) {
        toast.error('Not possible to add friend')
       console.log(err.message)
      }
  }


  return (
    
      
        <FeedContainer>

        <UserCardContent>
          <Typography align={'center'}>
            {props.name.toUpperCase()}
            
          </Typography>
          <Button onClick={() => handleAddFriend(history)}>

        Add
          </Button>
      
        </UserCardContent>
        </FeedContainer>
      
    
  )
}

export default UserCard
