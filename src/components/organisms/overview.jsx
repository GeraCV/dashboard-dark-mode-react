import React from 'react'
import '../../styles/overviews.css'

const Overview = ({ title, social, number, icon, percentaje }) => {
  return (
    <article className="card__overview">
      <div className="pages__view">
        <p className="name"> {title} </p>
        <p className="number"> {number} </p>
      </div>
      <div className="sociales__overview">
        <div className="social-media">
          <img src={social} alt="Logo Facebook" />
        </div>
        <div className="percentage">
          <div className="icon">
            <img src={icon} alt="icon up" />
          </div>
          <p className="text"> {percentaje} </p>
        </div>
      </div>
    </article>
  )
}

export default Overview