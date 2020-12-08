import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'
export const PhotoImage = styled.img`
  width: 60vw;
  max-width: 600px;
  min-width: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
`

export const ScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
`

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  max-width: 600px;
  min-width: 300px;
`
export const RemovePhotoButton = styled(Fab)`
  position: fixed !important;
  left: 20px;
  bottom: 20px;
  z-index: 3;
`