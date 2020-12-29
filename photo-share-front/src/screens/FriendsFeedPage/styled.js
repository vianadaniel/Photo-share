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
  border-radius: 4px !important;
  padding: 8px 15px !important;
`

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 40px
`





