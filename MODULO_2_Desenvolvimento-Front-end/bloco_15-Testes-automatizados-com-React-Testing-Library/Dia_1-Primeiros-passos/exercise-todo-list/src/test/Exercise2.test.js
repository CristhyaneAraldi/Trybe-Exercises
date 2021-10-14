import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    render(<App />) // Caso precise de uma nova query adicione no object destructuring
    const inputText = screen.getByLabelText('Tarefa:');
    const inptBtn = screen.getByText('Adicionar');
    listTodo.forEach(item => {
      fireEvent.change(inputText, { target: { value: item } })
      fireEvent.click(inptBtn)
    })
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {

  })
})