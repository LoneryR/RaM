import axios from "axios"
import {useState} from 'react'

const useRamApi = () => {
  const [loading, setloading] = useState(false) 
  const searchCharacters = async(page=2, name='', status='', species='', gender='') => {
    setloading(true)
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?
      page=${page}
      &name=${name}
      &status=${status}
      &species=${species}
      &gender=${gender}`)
      setloading(false)
      return await response.data
    } catch (error) {
      console.log(error)
      
    } 
   
  }
  const changePage = async(page) => {
    setloading(true)
    try {
      const response = await axios.get(`${page}`)
      setloading(false)
      return await response.data
    } catch (error) {
      console.log(error)
    }
    
  }

  return {
    searchCharacters,
    changePage,
    loading
  }
}

export default useRamApi;