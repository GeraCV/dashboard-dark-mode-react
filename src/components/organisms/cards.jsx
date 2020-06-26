import React from 'react'
import cards from '../../cards'
import Card from './card'

const Cards = () => {
  return (
    <>
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
    </>
  )
}

export default Cards