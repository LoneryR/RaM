import axios from "axios"

const ramApi = () => {
  const searchCharacters = async(page=2, name='', status='', species='', gender='') => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?
      page=${page}
      &name=${name}
      &status=${status}
      &species=${species}
      &gender=${gender}`)
      return await response.data
    } catch (error) {
      console.log(error.response.status)
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
    searchCharacters,
    changePage,
  }
}

export default ramApi;