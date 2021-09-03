import React from 'react';

class Pokedex extends React.Component {
  render() {
    // const pokedex = this.props.pokedex;
    const { pokedex } = this.props;

    return (
      <section>
        
        <h2>{ pokedex.name }</h2>
        <img src={ pokedex.image } alt={ pokedex.name } />
        <p>{ pokedex.type }</p>
      </section>
    )
  }
}

export default Pokedex;