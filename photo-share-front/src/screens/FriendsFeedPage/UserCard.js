import React from 'react'
import {  PhotoLibrary } from '@material-ui/icons'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Typography from '@material-ui/core/Typography'
import {  UserCardContent } from './styled'
import Button from '@material-ui/core/Button'
import { FeedContainer } from '../PhotosFeedPage/styled'

const UserCard = ({handlePhotoLibrary, handleDelete, item}) => {

  return (   
      
    <FeedContainer>
      <UserCardContent>
        <Typography align={'center'}>
          {item && item.name.toUpperCase()}            
        </Typography>
        <div>  <Button>

          <PhotoLibrary style={{marginRight: '10px'}} onClick={() => handlePhotoLibrary(item.id)}/>
        </Button>       
        <Button>

          <RemoveCircleOutlineIcon onClick={handleDelete}/>
        </Button>
        </div>              
      </UserCardContent>
    </FeedContainer>

  )
}

export default UserCard
