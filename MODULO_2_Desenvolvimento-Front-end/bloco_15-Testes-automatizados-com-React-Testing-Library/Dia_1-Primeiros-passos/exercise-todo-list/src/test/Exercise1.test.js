import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    render(<App />);
    const inputBtn = screen.getByRole('button');
    expect(inputBtn.value).toBe('Adicionar');
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use os fireEvent, para simular a digitação do usuário e o clique.
    render(<App />);
    const inputBtn = screen.getByRole('button');
    const inputText = screen.getByTestId('inp-lala'); // adicionar data-testId
    const EVENT_VALUE = 'tomar banho';
    fireEvent.change(inputText, { target: { value: EVENT_VALUE }});
    fireEvent.click(inputBtn);
    expect(screen.getByText('tomar banho')).toBeInTheDocument();
  });
});
