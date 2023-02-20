
import { useEffect, useState } from "react";
import Characters from "./components/Charactes/Characters";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import Information from "./components/Information/Information";

function App() {

  const [characters, setCharacters] = useState('')
  const [page, setPage] = useState('')

  const getCharacters = (value) => {
    setCharacters(value)
  }

  const getPage = (value) => {
    setPage(value)
  }

  return (
    <div className="App">
      <Header getCharacters={getCharacters} page={page}/>
      <main>
        <Filter />
        <div className="main_info">
          <Characters characters={characters} getPage={getPage} getCharacters={getCharacters}/>
        </div>
        <Information />
      </main>
    </div>
  );
}

export default App;
