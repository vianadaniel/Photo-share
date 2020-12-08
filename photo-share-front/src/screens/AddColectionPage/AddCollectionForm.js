import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, AddPhotoFormContainer} from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { addCollection } from '../../services/photo'
import CircularProgress from '@material-ui/core/CircularProgress'

const AddCollectionForm = (props) => {
  const history = useHistory()
  const [form, handleInputChange] = useForm({title: '', subtitle: '', image: ''})
  const [isLoading, setIsLoading] = useState(false)

  const onClickAddCollection = (event) => {
    event.preventDefault()
    const element = document.getElementById('collection_form')
    const isValid = element.checkValidity()
    element.reportValidity()
    if (isValid) {
      addCollection(form, history, setIsLoading)
    }
  }

  return (
    <form id={'collection_form'}>
      <AddPhotoFormContainer>
        <InputsContainer>
          <TextField
            value={form.title}
            name={'title'}
            onChange={handleInputChange}
            label={'Title'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            value={form.subtitle}
            name={'subtitle'}
            onChange={handleInputChange}
            label={'Subtitle'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.image}
            name={'image'}
            onChange={handleInputChange}
            label={'Link of file'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
          
        </InputsContainer>
        <Button
          onClick={onClickAddCollection}
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
          margin={'normal'}
        >
          {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Add Collection</>}
        </Button>
      </AddPhotoFormContainer>
    </form>
  )
}

export default AddCollectionForm
