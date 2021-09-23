import React from "react";

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      cocktails: null,
      query: '',
      loading: false,
    }

    this.handleInputQuery = this.handleInputQuery.bind(this); 
    //como a func acessa o this, preciso fazer o bind
  }

  // handleInputQuery({ target }) {
  //   this.setState({
  //     [target.name]: target.value,
  //   });
  // }
  // outra forma de desestruturar:

  handleInputQuery({ target: { name, value }}) {
    this.setState({
      [name]: value, // indo ao objeto e procurando alguém com nome equivalente
    });
  }

  render() {
    const { query } = this.state; // desconstruindo query para uso no render

    return (
      <section>
        <label htmlFor="inputQuery">
          Encontre seu cocktail favorito
          <input 
            type="text"
            id="inputQuery"
            name="query" // mesmo nome que vc der no estado, atribui à propriedade name
            value={ query } // trago esse query por meio do this.state
            onChange={ this.handleInputQuery }
          />
        </label>
      </section>
    )
  }
}

export default Home;