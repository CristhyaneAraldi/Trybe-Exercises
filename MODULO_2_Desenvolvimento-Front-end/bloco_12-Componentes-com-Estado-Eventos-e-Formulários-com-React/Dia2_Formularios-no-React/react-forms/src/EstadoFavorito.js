import React, { Component } from 'react';

class EstadoFavorito extends Component {
  render() {
    const { value, handleChange } = this.props // A função que altera o estado do componente pai chega ao componente filho via `props`!

    return(
      <label>
        Diga qual é o seu estado favorito! Do Brasil ou do React, você quem sabe!
        <textarea 
          name="estadoFavorito" 
          value={value} 
          onChange={handleChange} 
        />
      </label>
    )
  }
}

export default EstadoFavorito;