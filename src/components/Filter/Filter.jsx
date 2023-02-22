import React from 'react'
import styles from './filter.module.scss'

const Filter = (data) => {
  const {getStatus, getSpecies, getGender} = data
  const Clear = (e) => {
    const aside = e.target.parentNode.parentNode
    aside.childNodes.forEach(el => {
      if(el.firstChild.nodeName === "BUTTON"){
        el.childNodes.forEach((el) => {
          el.className = ''
        })
      }
    })
    getStatus('')
    getSpecies('')
    getGender('')
  }
  const valuesStatus = ['All', 'Alive', 'Dead', 'Unknown']
  const valuesSpecies = ['All', 'Human', 'Alien', 'Humanoid',
                        'Poopybutthole', 'Animal', 'Disease',
                        'Cronenberg', 'Mythological Creature', 'Robot',
                        'Unknown']
  const valuesGender = ['All', 'Male', 'Female', 'Genderless', 'Unknown']
  const filters = (name, value, get) => {
    return(
      <div className={name}>
        
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
              el === 'All' ? get('') : get(el)
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
        <h1>Filters</h1>
        <button onClick={(e) => Clear(e)}>Clear Filters</button>
      </header>
      <h2>Status</h2>
      {filters(styles.status, valuesStatus, getStatus)}
      <h2>Species</h2>
      {filters(styles.species, valuesSpecies, getSpecies)}
      <h2>Gender</h2>
      {filters(styles.gender, valuesGender, getGender)}
    </aside>
  )
}

export default Filter