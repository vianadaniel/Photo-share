import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'

const useRequestData = (initialData, endpoint) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios.get(`${BASE_URL}${endpoint}`)
      .then((response) => {
        
        setData(response.data.photos)
      })
      .catch((error) => {
        console.log(error)
        alert('Fail, try again')
      })
  }, [endpoint])

  return (data)
}

export default useRequestData
