import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Fab from '@material-ui/core/Fab'

export const RecipeCardContainer = styled(Card)`
  width: 250px;
  margin: 10px
`

export const RecipeCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px;
`

export const AddRecipeButton = styled(Fab)`
  position: fixed !important;
  right: 20px;
  bottom: 20px;
  z-index: 3;
`
