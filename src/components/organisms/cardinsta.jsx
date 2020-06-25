import React from 'react'
import '../../styles/cards.css'

const CardInsta = () => {
  return (
    <article className="card instagram section-one">
      <div className="b-instagram"></div>
      <div className="card__sociales-user">
        <div className="social-media">
          <img src="http://127.0.0.1:5500/src/images/icon-instagram.svg" alt="Logo Instagram" />
        </div>
        <div className="user">
          <p className="name"> @GeraCV </p>
        </div>
      </div>
      <div className="card__followers">
        <p className="number"> 11K </p>
        <p className="text"> FOLLOWERS </p>
      </div>
      <div className="card__date">
        <div className="icon">
          <img src="http://127.0.0.1:5500/src/images/icon-down.svg" alt="icon up" />
        </div>
        <p className="date"> 1099 Today </p>
      </div>
    </article>
  )
}

export default CardInsta

