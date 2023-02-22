import React from 'react'
import CharactersCard from './CharactersCard'
import style from './characters.module.scss'
import useRamApi from '../../api/useRamApi'

const Characters = (data) => {
  const {characters, getCharacters, page, getPage} = data
  const {changePage, loading, err} = useRamApi()
  console.log(characters)

  const nextPage = async() => {
    if(characters !== undefined){
      if(characters.info.next !== null){
        getPage(characters.info.next.replace(/[^0-9]/g,""))
      }
      else if(characters.info.next === null){
        getPage(characters.info.pages)
      }
      if(page >= 1 && page < characters.info.pages){
        changePage(characters.info.next).then(res => getCharacters(res))
        window.scrollTo({
          top: 0,
          left: 0
        });
      }
    } 
  }

  const backPage = async() => {
    if(characters !== undefined){
      if(characters.info.prev !== null){
        getPage(characters.info.prev.replace(/[^0-9]/g,""))
      }
      else if(characters.info.prev === null){
        getPage(1)
      }
      if(page > 1 && page <= characters.info.pages){
        changePage(characters.info.prev).then(res => getCharacters(res))
        window.scrollTo({
          top: 0,
          left: 0
        });
      }
    }
  }
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
      <div className="buttons">
        <button onClick={() => backPage()}>назад</button>
          {page}
        <button onClick={() => nextPage()}>вперед</button>
      </div>
    </div>
  )
}

export default Characters