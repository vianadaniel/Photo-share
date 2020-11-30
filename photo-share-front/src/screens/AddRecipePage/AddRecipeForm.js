import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, AddRecipeFormContainer} from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { addRecipe } from '../../services/recipe'
import CircularProgress from '@material-ui/core/CircularProgress'

const AddRecipeForm = (props) => {
  const history = useHistory()
  const [form, handleInputChange] = useForm({title: '', description: '', image: ''})
  const [isLoading, setIsLoading] = useState(false)

  const onClickAddRecipe = (event) => {
    event.preventDefault()
    const element = document.getElementById('addrecipe_form')
    const isValid = element.checkValidity()
    element.reportValidity()
    if (isValid) {
      addRecipe(form, history, setIsLoading)
    }
  }

  return (
    <form id={'addrecipe_form'}>
      <AddRecipeFormContainer>
        <InputsContainer>
          <TextField
            value={form.title}
            name={'title'}
            onChange={handleInputChange}
            label={'Título'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            value={form.description}
            name={'description'}
            onChange={handleInputChange}
            label={'Descrição'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.image}
            name={'image'}
            onChange={handleInputChange}
            label={'Foto'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
        </InputsContainer>
        <Button
          onClick={onClickAddRecipe}
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
          margin={'normal'}
        >
          {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Adicionar Receita</>}
        </Button>
      </AddRecipeFormContainer>
    </form>
  )
}

export default AddRecipeForm
