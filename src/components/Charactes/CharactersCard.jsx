import React from 'react'
import style from './characterCard.module.scss'

const CharactersCard = ({data}) => {
  const {status, species, origin, location, image, name} = data
  const statusSwitch = (st_alive, st_dead, st_unknown) => {
    switch(status){
      case 'Alive': 
        return st_alive
      case 'Dead': 
        return st_dead
      case 'unknown': 
        return st_unknown
    }
  }
  return (
    <div className={`${style.card} ${statusSwitch(style.alive,
                                                  style.dead,
                                                  style.unknown)}`
                                                  }>
      <div className="img">
        <img src={image} alt="charater_img" />
      </div>
      <div className={style.info_card}>
        <h3>{name}</h3>
        <div className="status_race">
          <span className={statusSwitch(style.alive_status,
                                        style.dead_status,
                                        style.unknown_status)
                                      }>
            {status}
          </span> - {species}
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
      <button>
        More
      </button>
    </div>
  )
}

export default CharactersCard