import React , {useState} from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import UserCard from './UserCard'
import Modal from '../../components/ModalPhoto/ModalPhoto'

import Loading from '../../components/Loading/Loading'
import {  FeedContainer } from './styled'
import {  goToPhotoDetail } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'
import useRequestDataToken from '../../hooks/useRequestDataToken'

import axios from 'axios'
import {BASE_URL} from '../../constants/urls'


const FriendsFeedPage = () => {
  useProtectedPage()
  const history = useHistory()
  const [userPhotoLibrary, setUserPhotoLibrary] = useState([])
  const users = useRequestDataToken([], '/users/friends') 
  const [open, setOpen] = useState(false);

  const handlePhotoLibrary = async (id) => {    
    try{
      const response = await axios.get(`${BASE_URL}/users/friends/${id}`)
      setUserPhotoLibrary(response.data)
      setOpen(true)
    } catch (error) {
      console.log(error)
    }
  }
 
  const handleDelete = () => {

  }

  const renderUsers = () => (
    users.map((item) => {
      return (
        <UserCard
          key={item.id}
          item={item}
          handleDelete={handleDelete}
          handlePhotoLibrary={handlePhotoLibrary}          
        />
      )
    })
  )
  return (
    <>
      <FeedContainer>         
        {users.length > 0 ? renderUsers() : <Loading/>}
      </FeedContainer>
      <Modal data={userPhotoLibrary} open={open} handleClose={() => setOpen(false)}/>

    </>
  )
}

export default FriendsFeedPage
