import React from 'react'
import ramApi from '../../api/ram'
import CharactersCard from './CharactersCard'
import style from './characters.module.scss'

const Characters = (data) => {
  const {characters, getCharacters, page, getPage} = data
  const {changePage} = ramApi()
  console.log(characters)

  const nextPage = async() => {
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

  const backPage = async() => {
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

  return (
    <div className={style.main_info__items}>
      {characters ? characters.results.map((el) => {
        return <CharactersCard key={el.id} data={el}/>
      }) : <h1>LOADING</h1>}
      <div className="buttons">
        <button onClick={() => backPage()}>назад</button>
          {page}
        <button onClick={() => nextPage()}>вперед</button>
      </div>
    </div>
  )
}

export default Characters