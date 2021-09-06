import React from 'react';
import pokemons from './data';
import Pokedex from './Components/Pokedex';
import pokemonLogo from './pokemon.png';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <header> 
          <img className='logo' src={ pokemonLogo } alt='Pokemon'/>
          <h1>Pokedex</h1>
        </header>
        <span className="pokedex">
          { pokemons.map((pokemon) => <Pokedex pokedex={ pokemon } />)}
        </span>
        
      </main>
    )
  }
}

export default App;
