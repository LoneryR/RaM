import React, { useEffect, useState } from 'react'
import ramApi from '../../api/ram'
import CharactersCard from './CharactersCard'
import style from './characters.module.scss'

const Characters = (data) => {
  const {characters, getCharacters} = data
  const {changePage} = ramApi()
  console.log(characters)
  const [page, setPage] = useState(1)

  const nextPage = async() => {
    if(characters.info.next !== null){
      setPage(characters.info.next.replace(/[^0-9]/g,""))
    }
    else if(characters.info.next === null){
      setPage(characters.info.pages)
    }
    if(page >= 1 && page < characters.info.pages){
      changePage(characters.info.next).then(res => getCharacters(res))
      window.scrollTo({
        top: 0,
        left: 0,
      });
    }
  }

  const backPage = async() => {
    if(characters.info.prev !== null){
      setPage(characters.info.prev.replace(/[^0-9]/g,""))
    }
    else if(characters.info.prev === null){
      setPage(1)
    }
    if(page > 1 && page <= characters.info.pages){
      changePage(characters.info.prev).then(res => getCharacters(res))
      window.scrollTo({
        top: 0,
        left: 0,
      });
    }
  }

  return (
    <div className={style.main_info__items}>
      {characters ? characters.results.map((el) => {
        return <CharactersCard key={el.id} data={el}/>
      }) : null}
      <div className="buttons">
        <button onClick={() => backPage()}>назад</button>
          {page}
        <button onClick={() => nextPage()}>вперед</button>
      </div>
    </div>
  )
}

export default Characters