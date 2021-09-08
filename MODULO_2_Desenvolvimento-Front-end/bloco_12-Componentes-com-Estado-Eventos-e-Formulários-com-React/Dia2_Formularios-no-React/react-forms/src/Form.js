import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super()

    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);

    this.state = { // criando o estado inicial
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChave: '',
    }
  }
  handleTextAreaChange(event) {
    this.setState({ estadoFavorito: event.target.value })
  }

  render() {
    return (
      <div>
        <h1>Estados e React: ferramenta incrível ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual é o seu estado favorito! Do Brasil ou do React, você quem sabe!
            <textarea 
            name="estadoFavorito" 
            value={this.state.estadoFavorito} 
            onChange={this.handleTextAreaChange} />
          </label>

          <label>
            Email
            <input name="email" type="email" />
          </label>

          <label>
            Nome
            <input name="nome" type="text" />
          </label>

          <label>
            Idade
            <input name="idade" type="number" />
          </label>

          <label>
            Vai comparecer à conferência?
            <input name="vaiComparecer" type="checkbox" />
          </label>

          <label>
            Escolha sua palavra chave favorita:
            <select name="palavraChave">
              <option value="estado">Estado</option>
              <option value="evento">Evento</option>
              <option value="props">Props</option>
              <option value="hooks">Hooks</option>
            </select>
          </label>

        </form>
      </div>
    )
  }
}

export default Form