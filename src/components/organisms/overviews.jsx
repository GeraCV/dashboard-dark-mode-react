import React from 'react'
import overviews from '../../overviews'
import Overview from '../organisms/overview'

const Overviews = () => {
  return (
    <>
      <div className="overview">
        <p className="title"> Overview - Today </p>
      </div>
      <section className="section-two grid">
        {
          overviews.map(el =>
            <Overview
              key={el.id}
              title={el.title}
              social={el.social}
              number={el.number}
              icon={el.icon}
              percentaje={el.percentaje}

            />)
        }
      </section>
    </>
  )
}

export default Overviews