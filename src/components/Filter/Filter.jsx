import React from 'react'

const Filter = (data) => {
  const {getStatus, getSpecies, getGender} = data
  const valuesStatus = ['Alive', 'Dead', 'Unknown']
  const valuesSpecies = ['Human', 'Alien', 'Humanoid',
                        'Poopyboothole', 'Animal', 'Disease',
                        'Cronenberg', 'Mythological Creature', 'Robot',
                        'Unknown']
  const valuesGender = ['Male', 'Female', 'Genderless', 'Unknown']
  const filters = (value, get) => {
    return(
      <ul>
        {value.map(el => (
          <li key={el}>
            <button onClick={() => get(el)}>
              {el}
            </button>
          </li>
        ))}
      </ul>
    )
  }
  return (
    <aside>
      <header>Filter</header>
      <div className="status">
        {filters(valuesStatus, getStatus)}
      </div>
      <div className="species">
        {filters(valuesSpecies, getSpecies)}
      </div>
      <div className="gender">
        {filters(valuesGender, getGender)}
      </div>
    </aside>
  )
}

export default Filter