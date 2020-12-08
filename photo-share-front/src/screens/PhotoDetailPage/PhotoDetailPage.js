import React, { useState }from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import Typography from '@material-ui/core/Typography'
import Loading from '../../components/Loading/Loading'
import { PhotoContainer, ScreenContainer, PhotoImage, RemovePhotoButton } from './styled'
import { Remove } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { goToPhotosFeed } from '../../routes/Coordinator'
import {Modal} from '../../components/Modal/Modal'
import Button from '@material-ui/core/Button'

const PhotoDetailPage = () => {
  useProtectedPage()
  const history = useHistory();
  const {id} = useParams()
  const photo = useRequestData([], `/photo/${id}`)
  
  const [isModalVisible, setIsModalVisible] = useState(false)


  const handleDeleteImage = async() => {
    try {
      await axios.delete(`${BASE_URL}/photo/delete/${id}`)
      
      goToPhotosFeed(history)
      } catch(err) {
       console.log(err.message)
      }
  }
  const renderDetail = () => (
    <>
    <ScreenContainer>
      <PhotoContainer>
        <PhotoImage alt={'foto'} src={photo.file}/>
        <Typography gutterBottom align={'center'} variant={'h5'} color={'primary'}>{photo.subtitle}</Typography>
        <Typography align={'center'}>{photo.collection}</Typography>
        <Typography align={'center'}>{photo.author}</Typography>
        <Typography align={'center'}>{photo.tags}</Typography>
      </PhotoContainer>
      <RemovePhotoButton color={'secondary'} onClick={() => setIsModalVisible(true)}>
       
        <Remove/>
      </RemovePhotoButton>
    </ScreenContainer>
      {isModalVisible && 
      
      <Modal onClose={() => setIsModalVisible(false)}>
      <Button onClick={() => setIsModalVisible(false)}>Close</Button>
      <Button color={'secondary'} onClick={() => handleDeleteImage(history)}>Delete Photo</Button>
        
      </Modal>
      }
    </>
  )

  return (
    <>
      {photo ? renderDetail() : <Loading/>}
    </>
  )
}

export default PhotoDetailPage
