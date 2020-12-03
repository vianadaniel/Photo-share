import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, AddPhotoFormContainer} from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { addPhoto } from '../../services/photo'
import CircularProgress from '@material-ui/core/CircularProgress'

const AddPhotoForm = (props) => {
  const history = useHistory()
  const [form, handleInputChange] = useForm({subtitle: '', author: '', file: '',tags:'',collection:''})
  const [isLoading, setIsLoading] = useState(false)

  const onClickAddPhoto = (event) => {
    event.preventDefault()
    const element = document.getElementById('photo_form')
    const isValid = element.checkValidity()
    element.reportValidity()
    if (isValid) {
      addPhoto(form, history, setIsLoading)
    }
  }

  return (
    <form id={'photo_form'}>
      <AddPhotoFormContainer>
        <InputsContainer>
          <TextField
            value={form.subtitle}
            name={'subtitle'}
            onChange={handleInputChange}
            label={'Subtitle'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            value={form.author}
            name={'author'}
            onChange={handleInputChange}
            label={'Author'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.file}
            name={'file'}
            onChange={handleInputChange}
            label={'Link of file'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.tags}
            name={'tags'}
            onChange={handleInputChange}
            label={'Tags'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.collection}
            name={'collection'}
            onChange={handleInputChange}
            label={'Collection'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
        </InputsContainer>
        <Button
          onClick={onClickAddPhoto}
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
          margin={'normal'}
        >
          {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Add Photo</>}
        </Button>
      </AddPhotoFormContainer>
    </form>
  )
}

export default AddPhotoForm
