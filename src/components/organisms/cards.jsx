import React from 'react'
import '../../styles/cards.css'

const Card = ({ username, social, followers, icon, followersDay, name }) => {
  const nameCard = `card ${name}`
  return (
    <article className={nameCard}>
      <div className="card__sociales-user">
        <div className="social-media">
          <img src={social} alt="Logo Fcebook" />
        </div>
        <div className="user">
          <p className="name"> {username} </p>
        </div>
      </div>
      <div className="card__followers">
        <p className="number"> {followers} </p>
        <p className="text"> FOLLOWERS </p>
      </div>
      <div className="card__date">
        <div className="icon">
          <img src={icon} alt="icon up" />
        </div>
        <p className="date"> {followersDay} </p>
      </div>
    </article>
  )
}

export default Card

