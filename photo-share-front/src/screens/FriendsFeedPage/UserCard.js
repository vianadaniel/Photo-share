import React from 'react'
import {  PhotoLibrary } from '@material-ui/icons'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Typography from '@material-ui/core/Typography'
import {  UserCardContent } from './styled'

import { FeedContainer } from '../PhotosFeedPage/styled'

const UserCard = ({handlePhotoLibrary, handleDelete, item}) => {

  return (   
      
    <FeedContainer>
      <UserCardContent>
        <Typography align={'center'}>
          {item && item.name.toUpperCase()}            
        </Typography>
        <div>          
          <PhotoLibrary style={{marginRight: '10px'}} onClick={() => handlePhotoLibrary(item.id)}/>
          <RemoveCircleOutlineIcon onClick={handleDelete}/>
        </div>              
      </UserCardContent>
    </FeedContainer>

  )
}

export default UserCard
