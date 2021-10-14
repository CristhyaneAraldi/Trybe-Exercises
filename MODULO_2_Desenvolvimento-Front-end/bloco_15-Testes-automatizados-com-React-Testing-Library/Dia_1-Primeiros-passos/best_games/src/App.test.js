import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';

describe('Best-Games exercise', () => {
  it('Verifica se texto "Carregando..." é renderizado quando a aplicação é iniciada', () => {
    render(<App />);

    expect(screen.getByText(/carregando/i)).toBeInTheDocument();
  });

  it('Verifica se o primeiro jogo é renderizado na tela', async () => {
    render(<App />);

    await waitForElementToBeRemoved(() =>
      screen.getByText(/carregando/i),
      { timeout: 3000 },
    );

    const titles = screen.getAllByRole('heading', 
      { level: 3 });
    expect(titles[0].textContent).toBe('Minecraft');
  });

})
