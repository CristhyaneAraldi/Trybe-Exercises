import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      cocktails: null,
      query: '',
      loading: false,
      notFound: false,
    }

    this.handleInputQuery = this.handleInputQuery.bind(this); 
    //como a func acessa o this, preciso fazer o bind
    this.fetchData = this.fetchData.bind(this);
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

  fetchData() {
    const { query } = this.state;
    this.setState({
      loading: true,
    }, () => {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => response.json())
      .then((result) => {
        if (!result.drinks) { //if para notFound, pq só quero um comportamento se eu não tiver resposta
          return this.setState({
            notFound: true,
            loading: false,
            cocktails: false,
          })
        }
        this.setState({
          cocktails: result.drinks,
          loading: false,
        })
      })
      .catch((error) => console.log(error))
    })
  }

  render() {
    const { query, loading, cocktails, notFound } = this.state; // desconstruindo query para uso no render
    // if (loading) {
    //   return <div>Carregando...</div>
    // }
    return (
      <section>
        <form>
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
          <button
            type="button"
            onClick={ this.fetchData }
          >
            Pesquisar
          </button>
        </form>
        
        { loading && <div>Carregando...</div> }
        <div>
          { cocktails && cocktails.map((cocktail) => { // qdo cocktails entra no render, ainda está null, então só faço map quando cocktails retorna verdadeiro
            return(
              <div key={ cocktail.idDrink }>
                <Link to={ `/details/${cocktail.idDrink}` }>
                  <nav>{ cocktail.strDrink }</nav>
                </Link>
                <img src={ cocktail.strDrinkThumb } alt={ cocktail.strDrink } />
              </div>
              // na linha 75 (link) passo o id q irá aparecer na URL
            )          
           })}
        </div>
        
        {!loading && notFound && <div>Nenhum cocktail encontrado</div>}
      </section>
    );
  }
}

export default Home;