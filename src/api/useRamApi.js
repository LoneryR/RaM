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
      return await response.data
    } catch (error) {
      console.log(error)
    } 
    setloading(false)
  }
  const changePage = async(page) => {
    try {
      setloading(true)
      const response = await axios.get(`${page}`)
      return await response.data
    } catch (error) {
      console.log(error)
    }
    setloading(false)
  }

  return {
    searchCharacters,
    changePage,
    loading
  }
}

export default useRamApi;