import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import CollectionCard from './CollectionCard'
import useRequestData from '../../hooks/useRequestData'
import Loading from '../../components/Loading/Loading'
import { AddPhotoButton, FeedContainer } from './styled'
import { goToAddCollection, goToCollectionDetail } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'
import { Add } from '@material-ui/icons'

const CollectionsFeedPage = () => {
  useProtectedPage()
  const history = useHistory()
  const collections = useRequestData([], '/collection/all')
  

  const renderCollections = () => (
    collections.map((item) => {
      return (
        <CollectionCard
          key={item.id}
          onClick={() => goToCollectionDetail(history, item.title)}
          title={item.title}
          subtitle={item.subtitle}
          image={item.image}
        />
      )
    })
  )
  return (
    <>
      <FeedContainer>
         
        {collections.length > 0 ? renderCollections() : <Loading/>}
      </FeedContainer>
      <AddPhotoButton color={'primary'} onClick={() => goToAddCollection(history)}>
        <Add/>
      </AddPhotoButton>

    </>
  )
}

export default CollectionsFeedPage