import React from 'react';
import '../src/styles/root.css'
import Header from './components/organisms/header'
import Picture from './components/atoms/picture'
import Cards from './components/organisms/cards'
import CardInsta from './components/organisms/cardinsta'
import Overviews from './components/organisms/overviews'


function App() {
  return (
    <>
      < Header />
      <Picture />
      <main className="main">
        <section className="section-one grid">
          <Cards />
          <CardInsta />
        </section>
        <Overviews />
      </main>
    </>
  );
}

export default App;
