import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToRecipesFeed } from '../routes/Coordinator'

const useUnprotectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      goToRecipesFeed(history)
    }
  }, [history])
}

export default useUnprotectedPage
