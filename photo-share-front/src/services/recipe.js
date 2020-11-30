import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToRecipesFeed } from '../routes/Coordinator'

export const addRecipe = (body, history, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/recipe`, body, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }).then((response) => {
      setIsLoading(false)
      alert('Receita adicionada com sucesso!')
      goToRecipesFeed(history)
    }
  ).catch((error) => {
      console.log(error)
      setIsLoading(false)
      alert('Não foi possível adicionar sua receita, tente novamente')

    }
  )
}
