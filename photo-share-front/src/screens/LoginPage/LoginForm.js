import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, LoginFormContainer} from './styled'
import { login } from '../../services/user'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import CircularProgress from '@material-ui/core/CircularProgress'

const LoginForm = (props) => {
  const [form, handleInputChange] = useForm({ email: '', password: ''})
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  const onClickLogin = (event) => {
    event.preventDefault()
    const element = document.getElementById('login_form')
    const isValid = element.checkValidity()
    element.reportValidity()
    if (isValid) {
      login(form, history, props.setButtonName, setIsLoading)
    }
  }

  return (
      <form id={'login_form'}>
        <LoginFormContainer>
          <InputsContainer>
            <TextField
              value={form.email}
              name={'email'}
              onChange={handleInputChange}
              label={'E-mail'}
              variant={'outlined'}
              type={'email'}
              fullWidth
              required
              autoFocus
              margin={'normal'}
            />
            <TextField
              value={form.password}
              name={'password'}
              onChange={handleInputChange}
              label={'Senha'}
              variant={'outlined'}
              type={'password'}
              fullWidth
              required
              margin={'normal'}
            />
          </InputsContainer>
          <Button
            onClick={onClickLogin}
            color={'primary'}
            variant={'contained'}
            type={'submit'}
            fullWidth
            margin={'normal'}
          >
            {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Fazer Login</>}
          </Button>
        </LoginFormContainer>
      </form>
  )
}

export default LoginForm
