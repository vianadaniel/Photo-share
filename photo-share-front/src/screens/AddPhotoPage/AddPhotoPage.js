import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { PhotoContainer, ScreenContainer } from './styled'
import AddPhotoForm from './AddPhotoForm'
import {FileUploader} from './FileUploader'
import Typography from '@material-ui/core/Typography'

const AddPhotoPage = () => {
  useProtectedPage()
  return (
    <ScreenContainer>
      <PhotoContainer>
        <Typography gutterBottom variant={'h4'} align={'center'} color={'textPrimary'}>New Photo</Typography>
        <AddPhotoForm/>
        <FileUploader/>
      </PhotoContainer>
    </ScreenContainer>
  )
}

export default AddPhotoPage
