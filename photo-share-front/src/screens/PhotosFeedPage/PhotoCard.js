import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { RecipeCardContainer, RecipeCardContent } from './styled'

const PhotoCard = (props) => {

  return (
    <RecipeCardContainer >
      <CardActionArea>
        <CardMedia
          component={'img'}
          alt={props.subtitle}
          height={'150px'}
          image={props.file}
          title={props.subtitle}
        />
        <RecipeCardContent>
          <Typography align={'center'}>
            {props.title.toUpperCase()}
          </Typography>
        </RecipeCardContent>
      </CardActionArea>
    </RecipeCardContainer>
  )
}

export default PhotoCard
