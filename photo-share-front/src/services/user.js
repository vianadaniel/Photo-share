import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToPhotosFeed } from '../routes/Coordinator'

export const login = (body, history, setButtonName, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/users/login`, body)
    .then((response) => {
      
      localStorage.setItem('token', response.data.accessToken)
      setIsLoading(false)
      goToPhotosFeed(history)
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
  axios.post(`${BASE_URL}/users/signup`, body)
    .then((response)=>{
      localStorage.setItem('token', response.data.accessToken)
      setIsLoading(false)
      goToPhotosFeed(history)
      setButtonName('Logout')
    })
    .catch((error) => {
      console.log(error)
      setIsLoading(false)
      alert("Register fail, try again")
    })
}
