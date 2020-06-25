import React from 'react'
import cards from '../../cards'
import Card from '../organisms/cards'

const CardsGrid = () => {
  return (
    <>
      <main className="main">
        <section className="section-one grid">
          {
            cards.map(el => (
              <Card
                key={el.id}
                username={el.username}
                social={el.social}
                followers={el.followers}
                icon={el.icon}
                followersDay={el.followersDay}
                name={el.name}
              />)

            )
          }
        </section>
      </main>
    </>
  )
}

export default CardsGrid