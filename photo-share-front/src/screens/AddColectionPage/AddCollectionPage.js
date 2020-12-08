import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { PhotoContainer, ScreenContainer } from './styled'
import AddCollectionForm from './AddCollectionForm'
import Typography from '@material-ui/core/Typography'

const AddCollectionPage = () => {
  useProtectedPage()
  return (
    <ScreenContainer>
      <PhotoContainer>
        <Typography gutterBottom variant={'h4'} align={'center'} color={'textPrimary'}>New Collection</Typography>
        <AddCollectionForm/>
      </PhotoContainer>
    </ScreenContainer>
  )
}

export default AddCollectionPage
