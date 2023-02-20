import axios from "axios"

const ramApi = () => {
  const charactersApi = async(page=2) => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      return await response.data
    } catch (error) {
      throw new Error(error)
    }
  }
  const searchCharacters = async(page=2, name='') => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`)
      return await response.data
    } catch (error) {
      throw new Error(error)
    }
  }
  const changePage = async(page) => {
    try {
      const response = await axios.get(`${page}`)
      return await response.data
    } catch (error) {
      throw new Error(error)
    }
  }

  return {
    charactersApi,
    searchCharacters,
    changePage
  }
}

export default ramApi;