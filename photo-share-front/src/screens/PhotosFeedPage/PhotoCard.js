import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { PhotoCardContainer, PhotoCardContent } from './styled'

const PhotoCard = (props) => {

  return (
    <PhotoCardContainer >
      <CardActionArea>
        <CardMedia
          component={'img'}
          alt={props.subtitle}
          height={'150px'}
          image={props.image}
          title={props.subtitle}
        />
        <PhotoCardContent>
          <Typography align={'center'}>
            {props.title.toUpperCase()}
          </Typography>
        </PhotoCardContent>
      </CardActionArea>
    </PhotoCardContainer>
  )
}

export default PhotoCard
