import React from 'react'
import styles from './filter.module.scss'

const Filter = (data) => {
  const {getStatus, getSpecies, getGender} = data
  const Clear = (e) => {
    const aside = e.target.parentNode
    aside.childNodes[2].childNodes.forEach((el) => {
      el.className = ''
    })
    aside.childNodes[3].childNodes.forEach((el) => {
      el.className = ''
    })
    aside.childNodes[4].childNodes.forEach((el) => {
      el.className = ''
    })
    getStatus('')
    getSpecies('')
    getGender('')
  }
  const valuesStatus = ['Alive', 'Dead', 'Unknown']
  const valuesSpecies = ['Human', 'Alien', 'Humanoid',
                        'Poopybutthole', 'Animal', 'Disease',
                        'Cronenberg', 'Mythological Creature', 'Robot',
                        'Unknown']
  const valuesGender = ['Male', 'Female', 'Genderless', 'Unknown']
  const filters = (header, name, value, get) => {
    return(
      <div className={name}>
        <h2>{header}</h2>
        {value.map(el => (
            <button key={el} onClick={(e) => {
              const parrent = e.target.parentNode.childNodes
              console.log(parrent)
              parrent.forEach((el) => {
                if(el.innerText !== e.target.innerText){
                  el.className = ''
                } else {
                  el.className = styles.active
                }
              })
              get(el)
            }}>
              {el}
            </button>
        ))}
      </div>
    )
  }
  return (
    <aside>
      <header>
        <h2>Filters</h2>
      </header>
      <button onClick={(e) => Clear(e)}>Clear Filters</button>
      {filters('Status', styles.status, valuesStatus, getStatus)}
      {filters('Species', styles.species, valuesSpecies, getSpecies)}
      {filters('Gender', styles.gender, valuesGender, getGender)}
    </aside>
  )
}

export default Filter