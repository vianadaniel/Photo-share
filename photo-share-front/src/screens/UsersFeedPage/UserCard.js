import React from 'react'
import { useHistory } from 'react-router-dom'
import { Add } from '@material-ui/icons'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {  UserCardContent } from './styled'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { FeedContainer } from '../PhotosFeedPage/styled'
import {goToFriendsFeed} from '../../routes/Coordinator'
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
      
      goToFriendsFeed(history)
      } catch(err) {
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

        <Add color={'primary'} />
          </Button>
      
        </UserCardContent>
        </FeedContainer>
      
    
  )
}

export default UserCard
