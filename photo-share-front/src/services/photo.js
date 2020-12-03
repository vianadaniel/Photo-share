import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToPhotosFeed } from '../routes/Coordinator'

export const addPhoto = (body, history, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/photo/create`, body, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }).then((response) => {
      setIsLoading(false)
      alert('Post new photo!')
      goToPhotosFeed(history)
    }
  ).catch((error) => {
      console.log(error)
      setIsLoading(false)
      alert('Fail post new photo!')

    }
  )
}
