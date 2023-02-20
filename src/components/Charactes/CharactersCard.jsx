import React from 'react'
import style from './characterCard.module.scss'

const CharactersCard = ({data}) => {
  const {status, species, origin, location, image, name} = data
  const statusSwitch = () => {
    switch(status){
      case 'Alive': 
        return style.alive
      case 'Dead': 
        return style.dead
      case 'unknown': 
        return style.unknown
    }
  }
  return (
    <div className={style.card}>
      <img src={image} alt="charater_img" />
      <div className={style.info_card}>
        <h3>{name}</h3>
        <div className="status_race">
          <span className={statusSwitch()}>{status}</span> - {species}
        </div>
        <div className="last_seen">
          <span>Last location:</span>
          <br />
          {location.name}
        </div>
        <div className="first_seen">
          <span>First location: </span>
          <br />
          {origin.name}
        </div>
      </div>
      <button>more</button>
    </div>
  )
}

export default CharactersCard