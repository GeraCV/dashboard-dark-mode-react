import React from 'react';
import '../src/styles/root.css'
import Header from './components/organisms/header'
import CardsGrid from './components/organisms/cardsGrid'
import CardInsta from './components/organisms/cardinsta'


function App() {
  return (
    <>
      < Header />
      <CardsGrid />
      <CardInsta />
    </>
  );
}

export default App;
