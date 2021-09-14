import React from 'react';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1> Pokedex </h1>
        </div>
        <Route path="/" render={ (props) => <Pokedex  {...props} pokemons={pokemons} /> } />
        {/* <Route path="/pokemons/:id" component={PokemonDetails} /> */}
      </BrowserRouter>
    );
  }
}
export default App;