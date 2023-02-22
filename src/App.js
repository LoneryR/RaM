import { useState } from "react";
import Characters from "./components/Charactes/Characters";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import Information from "./components/Information/Information";

function App() {

  const [characters, setCharacters] = useState('')
  const [page, setPage] = useState('')
  const [status, setStatus] = useState('')
  const [species, setSpecies] = useState('')
  const [gender, setGender] = useState('')

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

  return (
    <div className="App">
      <Header getCharacters={getCharacters} status={status} species={species} getPage={getPage} gender={gender}/>
      <main>
        <Filter getStatus={getStatus} getSpecies={getSpecies} getGender={getGender}/>
        <div className="main_info">
          <Characters characters={characters} getCharacters={getCharacters} page={page} getPage={getPage}/>
        </div>
        <Information />
      </main>
    </div>
  );
}

export default App;
