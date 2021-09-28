import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      cocktails: null,  // vai receber o valor da API
      query: '', // query de pesquisa no input
      loading: false, // começa com false pq chamada de API não será no DidMount (button que chamará a API, e não ao renderizar a página)
      notFound: false,
    }

    this.handleInputQuery = this.handleInputQuery.bind(this); //como a func acessa o this, preciso fazer o bind
    this.fetchData = this.fetchData.bind(this);
  }

  // handleInputQuery({ target }) {
  //   this.setState({
  //     [target.name]: target.value,
  //   });
  // }
  // outra forma de desestruturar:

  handleInputQuery({ target: { name, value }}) { //responsabilidade dessa função é manipular a query do input (espera receber um event (name traz a propriedade name que eu setei no input e value é o q o usuário digita))
    this.setState({
      [name]: value, // indo ao objeto e procurando alguém com nome equivalente (no caso, name atribuído foi query, igual ao q está no meu estado)
    }); // esse objeto vai modificar a chave no estado q corresponde ao name e vai jogar value pra dentro dela
  }

  fetchData() { // na prática essa função ficaria em arq na pasta services
    const { query } = this.state; // query será parâmetro de fetch
    this.setState({ // vai setar estado e segundo param recebe a função de callback
      loading: true,
    }, () => {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => response.json())
      .then((result) => {
        if (!result.drinks) { // if para notFound, pq só quero o comportamento posterior se eu não tiver resposta
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
      <section className="home">
        <form className="home-form">
          <label htmlFor="inputQuery" className="form-label">
          Encontre seu cocktail favorito
          <input 
            type="text"
            id="inputQuery" // deve ser igual ao htmlFor e valor único
            name="query" // mesmo nome que vc der no estado, atribui à propriedade name do input
            value={ query } // será controlado pelo estado, então tem q receber a query. Trago essa query por meio do this.state, desestruturando
            onChange={ this.handleInputQuery } // como esse valor será controlado pelo estado
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
        {/* nao posso usar if dentro de jsx */}
        
        <div>
          { cocktails && cocktails.map((cocktail) => { // qdo cocktails entra no render, ainda está null, então só faço map quando cocktails retorna verdadeiro
            return(
              <div key={ cocktail.idDrink } >
                <Link to={ `/details/${cocktail.idDrink}` }>
                  <nav className="drink-name">{ cocktail.strDrink }</nav>
                </Link>
                <img src={ cocktail.strDrinkThumb } alt={ cocktail.strDrink } className="drink-img" />
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