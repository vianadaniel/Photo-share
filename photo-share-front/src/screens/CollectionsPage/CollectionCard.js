import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { PhotoCardContainer, PhotoCardContent } from './styled'

const CollectionCard = (props) => {

  return (
    <PhotoCardContainer onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          component={'img'}
          alt={props.subtitle}
          height={'150px'}
          image={props.image}
          title={props.title}
        />
        <PhotoCardContent>
        <Typography align={'center'}>
            {props.title}
          </Typography>
          <Typography align={'center'}>
            {props.subtitle}
          </Typography>
        </PhotoCardContent>
      </CardActionArea>
    </PhotoCardContainer>
  )
}

export default CollectionCard
