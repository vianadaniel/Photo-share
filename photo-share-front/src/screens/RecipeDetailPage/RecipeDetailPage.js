import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import Typography from '@material-ui/core/Typography'
import Loading from '../../components/Loading/Loading'
import { RecipeContainer, ScreenContainer, RecipeImage } from './styled'

const RecipeDetailPage = () => {
  useProtectedPage()
  const {id} = useParams()
  const recipe = useRequestData([], `/recipe/${id}`)[0]

  const renderDetail = () => (
    <ScreenContainer>
      <RecipeContainer>
        <RecipeImage alt={'foto_receita'} src={recipe.image}/>
        <Typography gutterBottom align={'center'} variant={'h5'} color={'primary'}>{recipe.title}</Typography>
        <Typography align={'center'}>{recipe.description}</Typography>
      </RecipeContainer>
    </ScreenContainer>
  )

  return (
    <>
      {recipe ? renderDetail() : <Loading/>}
    </>
  )
}

export default RecipeDetailPage
