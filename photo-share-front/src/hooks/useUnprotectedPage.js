import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToPhotosFeed } from '../routes/Coordinator'

const useUnprotectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      goToPhotosFeed(history)
    }
  }, [history])
}

export default useUnprotectedPage
