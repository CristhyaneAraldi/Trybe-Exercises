import React, { Component } from 'react';
import EstadoFavorito from './EstadoFavorito';
import './Form.css'

class Form extends Component {
  constructor() {
    super()

    // this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = { // criando o estado inicial
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChave: '',
    }
  }
  // handleTextAreaChange(event) {
  //   this.setState({ estadoFavorito: event.target.value })
  // }

  // event handlers genéricos:
  handleChange({ target }) { // desestrutura 'event.target' já para 'target'
    const { name } = target // pega name e value de target; name será por exemplo o 'estadoFavorito' e 'value' será o que eu escrevo no input (alterado para constar apenas 'name', ver abaixo:)
    const value = target.type === 'checkbox' ? target.checked : target.value // para checkbox o bolleano de retorno não fica em 'value', mas sim em 'checkbox'

    this.setState({
      [name]: value
    })

  }

  render() {
    return (
      <div>
        <h1>Estados e React: ferramenta incrível ou reagindo a regionalismos?</h1>
        <form className="form">
          <EstadoFavorito value={this.state.EstadoFavorito} handleChange={this.handleChange} />

          <label>
            Email
            <input
              name="email" 
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Nome
            <input 
              name="nome" 
              type="text"
              value={this.state.nome}
              onChange={this.handleChange} 
            />
          </label>

          <label>
            Idade
            <input 
              name="idade" 
              type="number" 
              value={this.state.idade}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Vai comparecer à conferência?
            <input 
              name="vaiComparecer" 
              type="checkbox" 
              value={this.state.vaiComparecer}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Escolha sua palavra chave favorita:
            <select 
              name="palavraChave" 
              value={this.state.palavraChave}
              onChange={this.handleChange}
            >
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