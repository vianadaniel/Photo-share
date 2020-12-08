import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import Loading from '../../components/Loading/Loading'
import { useHistory } from 'react-router-dom'
import PhotoCard from './PhotoCard'
import { AddPhotoButton, FeedContainer } from './styled'
import { goToAddPhoto, goToPhotoDetail} from '../../routes/Coordinator'

import { Add } from '@material-ui/icons'

const CollectionsDetailPage = () => {
  useProtectedPage()
  const history = useHistory();
  const {collection} = useParams()
  const photos = useRequestData([], `/collection/${collection}`)
  
  
  const renderPhotos = () => (
    photos.map((item) => {
      return (
        <PhotoCard
          key={item.id}
          onClick={() => goToPhotoDetail(history, item.id)}
          subtitle={item.subtitle}
          file={item.file}
        />
      )
    })
  )
  return (
    <>
      <FeedContainer>
         
        {photos.length > 0 ? renderPhotos() : <Loading/>}
      </FeedContainer>
      <AddPhotoButton color={'primary'} onClick={() => goToAddPhoto(history)}>
        <Add/>
      </AddPhotoButton>

    </>
  )
  }
export default CollectionsDetailPage