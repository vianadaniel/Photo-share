import React from 'react'


import Typography from '@material-ui/core/Typography'
import {  UserCardContent } from './styled'

import { FeedContainer } from '../PhotosFeedPage/styled'

const UserCard = (props) => {

  return (
    
      
        <FeedContainer>

        <UserCardContent>
          <Typography align={'center'}>
            {props.name.toUpperCase()}
            
          </Typography>
          
        
      
        </UserCardContent>
        </FeedContainer>
      
    
  )
}

export default UserCard
