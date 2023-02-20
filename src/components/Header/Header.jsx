import React, { useEffect, useState } from 'react'
import ramApi from '../../api/ram'
import style from './header.module.scss'

const Header = (data) => {
  const {getCharacters, page} = data
  const [name, setName] = useState('')
  const {searchCharacters} = ramApi()

  useEffect(() => {
    searchCharacters(page, name)
    .then(res => {
      getCharacters(res)
    })
  }, [name, page])

  return (
    <header className={style.header}>
      <div className={style.header_main}>
        <h2 className="logo">
          Rick And Morty
        </h2>
        <nav>
          <ul>
            <li><a href="#">Characters</a></li>
            <li><a href="#">Locations</a></li>
            <li><a href="#">Episodes</a></li>
          </ul>
          <input 
            type="text"
            placeholder='Search'
            value={name}
            onChange={(e) => setName(e.target.value)}
           />
        </nav>
        <button className="theme">
          theme
        </button>
      </div>
    </header>
  )
}

export default Header