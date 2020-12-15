import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'


export const PhotoCardContainer = styled(Card)`
  width: 250px;
  margin: 10px
`

export const UserCardContent = styled(CardContent)`
  display: flex;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  height: 10px;
`

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  margin-top: 40px
`





