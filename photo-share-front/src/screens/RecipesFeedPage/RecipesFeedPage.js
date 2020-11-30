import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import RecipeCard from './RecipeCard'
import useRequestData from '../../hooks/useRequestData'
import Loading from '../../components/Loading/Loading'
import { AddRecipeButton, FeedContainer } from './styled'
import { goToAddRecipe, goToRecipeDetail } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'
import { Add } from '@material-ui/icons'

const RecipeFeedPage = () => {
  useProtectedPage()
  const history = useHistory()
  const recipes = useRequestData([], '/recipe/feed')

  const renderRecipes = () => (
    recipes.map((item) => {
      return (
        <RecipeCard
          key={item.recipe_id}
          onClick={() => goToRecipeDetail(history, item.recipe_id)}
          title={item.title}
          image={item.image}
        />
      )
    })
  )

  return (
    <>
      <FeedContainer>
        {recipes.length > 0 ? renderRecipes() : <Loading/>}
      </FeedContainer>
      <AddRecipeButton color={'primary'} onClick={() => goToAddRecipe(history)}>
        <Add/>
      </AddRecipeButton>

    </>
  )
}

export default RecipeFeedPage
