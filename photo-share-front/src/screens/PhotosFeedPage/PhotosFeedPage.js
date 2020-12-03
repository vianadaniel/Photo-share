import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import PhotoCard from './PhotoCard'
import useRequestData from '../../hooks/useRequestData'
import Loading from '../../components/Loading/Loading'
import { AddPhotoButton, FeedContainer } from './styled'
import { goToAddPhoto } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'
import { Add } from '@material-ui/icons'

const PhotosFeedPage = () => {
  useProtectedPage()
  const history = useHistory()
  const photo = useRequestData([], '/photo/all')
  

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
      <AddPhotoButton color={'primary'} onClick={() => goToAddPhoto(history)}>
        <Add/>
      </AddPhotoButton>

    </>
  )
}

export default PhotosFeedPage
