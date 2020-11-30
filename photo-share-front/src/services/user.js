import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToRecipesFeed } from '../routes/Coordinator'

export const login = (body, history, setButtonName, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/user/login`, body)
    .then((response) => {
      localStorage.setItem('token', response.data.token)
      setIsLoading(false)
      goToRecipesFeed(history)
      setButtonName('Logout')
    })
    .catch((error) => {
      console.log(error)
      setIsLoading(false)
      alert("Falha no Login, tente novamente")
    })
}

export const signUp = (body, history, setButtonName, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/user/signup`, body)
    .then((response)=>{
      localStorage.setItem('token', response.data.token)
      setIsLoading(false)
      goToRecipesFeed(history)
      setButtonName('Logout')
    })
    .catch((error) => {
      console.log(error)
      setIsLoading(false)
      alert("Falha no Cadastro, tente novamente")
    })
}
