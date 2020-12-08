import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToPhotosFeed, goToCollectionsFeed } from '../routes/Coordinator'

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

export const addCollection = (body, history, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/collection/create`, body).then((response) => {
      setIsLoading(false)
      alert('Post new collection!')
      goToCollectionsFeed(history)
    }
  ).catch((error) => {
      console.log(error)
      setIsLoading(false)
      alert('Fail post new collection!')

    }
  )
}
