import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Components/Pokedex';
import pokemonLogo from './pokemon.png';

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <header> 
          <img className='logo' src={ pokemonLogo } alt='Pokemon'/>
          <h1>Pokedex</h1>
        </header>
        
        <Pokedex pokedex={pokemons[0]}/>
        <Pokedex pokedex={pokemons[1]}/>
  
      </main>
    )
  }
}

export default App;
