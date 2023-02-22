import { useState } from "react";
import useRamApi from "./api/useRamApi";
import Characters from "./components/Charactes/Characters";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";

function App() {

  const [characters, setCharacters] = useState('')
  const [page, setPage] = useState('')
  const [status, setStatus] = useState('')
  const [species, setSpecies] = useState('')
  const [gender, setGender] = useState('')

  const {changePage} = useRamApi()

  const getCharacters = (value) => {
    setCharacters(value)
  }

  const getPage = (value) => {
    setPage(value)
  }

  const getStatus = (value) => {
    setStatus(value)
  }

  const getSpecies = (value) => {
    setSpecies(value)
  }

  const getGender = (value) => {
    setGender(value)
  }

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

  return (
    <div className="App">
      <Header getCharacters={getCharacters} status={status} species={species} getPage={getPage} gender={gender}/>
      <main>
        <Filter getStatus={getStatus} getSpecies={getSpecies} getGender={getGender}/>
        <div className="main_info">
          <Characters characters={characters} getCharacters={getCharacters} page={page} getPage={getPage}/>
        </div>
      </main>
      <div className="buttons">
        <button onClick={() => backPage()}>Back</button>
          {page}
        <button onClick={() => nextPage()}>Next</button>
      </div>
    </div>
  );
}

export default App;
