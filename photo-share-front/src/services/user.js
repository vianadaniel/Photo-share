import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToRecipesFeed } from '../routes/Coordinator'

export const login = (body, history, setButtonName, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/users/login`, body)
    .then((response) => {
      console.log(response)
      localStorage.setItem('token', response.data.accessToken)
      setIsLoading(false)
      goToRecipesFeed(history)
      setButtonName('Logout')
    })
    .catch((error) => {
      console.log(error)
      setIsLoading(false)
      alert("Login fail, try again")
    })
}

export const signUp = (body, history, setButtonName, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/user/signup`, body)
    .then((response)=>{
      localStorage.setItem('token', response.data.accessToken)
      setIsLoading(false)
      goToRecipesFeed(history)
      setButtonName('Logout')
    })
    .catch((error) => {
      console.log(error)
      setIsLoading(false)
      alert("Register fail, try again")
    })
}
