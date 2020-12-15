import React from 'react'

import { Add } from '@material-ui/icons'
import Typography from '@material-ui/core/Typography'
import {  UserCardContent } from './styled'

import { FeedContainer } from '../PhotosFeedPage/styled'

const UserCard = (props) => {

  return (
    
      
        <FeedContainer>

        <UserCardContent>
          <Typography align={'center'}>
            {props.subtitle.toUpperCase()}
            
          </Typography>
          
        <Add color={'primary'}/>
      
        </UserCardContent>
        </FeedContainer>
      
    
  )
}

export default UserCard
