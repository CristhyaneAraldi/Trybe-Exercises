import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li className='item-lista'>{value}</li>
  );
}

const arrayDeTarefas = ['Ligar o computador', 'Estudar', 'Eazer exercícios'];

class App extends React.Component {
  render() {
    return (
      <ul>{ arrayDeTarefas.map((tarefa) => Task(tarefa))} </ul>
    )
  }
}

export default App;
