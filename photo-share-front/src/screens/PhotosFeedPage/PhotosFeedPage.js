import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import PhotoCard from './PhotoCard'
import useRequestData from '../../hooks/useRequestData'
import Loading from '../../components/Loading/Loading'
import { AddRecipeButton, FeedContainer } from './styled'
import { goToAddRecipe, goToRecipeDetail } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'
import { Add } from '@material-ui/icons'

const PhotosFeedPage = () => {
  useProtectedPage()
  const history = useHistory()
  const photo = useRequestData([], '/photo/all')
  console.log(photo.photos)

  const renderPhotos = () => (
    photo.map((item) => {
      return (
        <PhotoCard
          key={item.id}
          
          title={item.subtitle}
          image={item.file}
        />
      )
    })
  )
  return (
    <>
      <FeedContainer>
         
        {photo.length > 0 ? renderPhotos() : <Loading/>}
      </FeedContainer>
      <AddRecipeButton color={'primary'} onClick={() => goToAddRecipe(history)}>
        <Add/>
      </AddRecipeButton>

    </>
  )
}

export default PhotosFeedPage
