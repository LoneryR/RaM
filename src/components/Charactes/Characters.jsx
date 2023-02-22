import React from 'react'
import CharactersCard from './CharactersCard'
import style from './characters.module.scss'
import useRamApi from '../../api/useRamApi'

const Characters = (data) => {
  const {characters} = data
  const {loading} = useRamApi()
  console.log(characters)

  const charactersView = characters && !loading? characters.results.map((el) => {
    return <CharactersCard key={el.id} data={el}/>
  }) : null
  const errorView = characters === undefined ? 
    <h1>
      Undefined characters
    </h1> : null
  const loadingView = loading ? <>Loading</> : null
  return (
    <div className={style.main_info__items}>
      {charactersView}
      {errorView}
      {loadingView}
    </div>
  )
}

export default Characters