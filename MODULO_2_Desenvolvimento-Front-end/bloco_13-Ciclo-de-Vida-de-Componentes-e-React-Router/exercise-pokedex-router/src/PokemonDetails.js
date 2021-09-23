import React from 'react';
import pokemons from './data'
import Pokemon from './Pokemon';
class PokemonDetails extends React.Component {
  
  render() {
    const { id } = this.props.match.params;
    const pokemon = pokemons.find((pokemon) => pokemon.id === Number(id));
    return (
      <Pokemon pokemon={ pokemon } />
    );
  }
}
export default PokemonDetails;