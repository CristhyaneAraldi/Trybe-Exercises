import React from 'react';
// import '../pokedex.css';

class Pokedex extends React.Component {
  render() {
    // const pokedex = this.props.pokedex;
    const { pokedex } = this.props;

    return (
      <section className="pokemon">
        <div>
          <h2>{ pokedex.name }</h2>
          <p>{ `Type: ${pokedex.type}` }</p>
          <p>{ `Average Weight: ${pokedex.averageWeight.value} ${pokedex.averageWeight.measurementUnit}`}</p>
        </div>    
        <div>
          <img src={ pokedex.image } alt={ pokedex.name } />
        </div>
      </section>
    )
  }
}

export default Pokedex;