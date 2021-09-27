import React from 'react';
import { render } from '@testing-library/react'
import App from './App';

afterEach(() => jest.clearAllMocks()); // essa linha faz com que, após cada teste, nosso mock seja limpo, garantindo que após o teste o fetch não seja mais um mock (util para que não tenha interferência entre um teste e outro)
it('fetch joke', async () => { // este async perite o uso do await findByText
  const joke = { // cria um objeto similar ao que é retornado da API
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, "fetch") // espiona as chamadas à função fetch do objeto global
  global.fetch.mockResolvedValue({ //  é por meio deste objeto global que conseguimos usar qualquer função do sistema (ex parseInt) (Quando a função fetch for chamada, ao invés de fazer uma requisição a uma API externa será chamando nosso mock)
    json: jest.fn().mockResolvedValue(joke),
  });
  const { findByText } = render(<App />);
  await findByText('Whiteboards ... are remarkable.');
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    {"headers": {"Accept": "application/json"}}
  );
});

// As funções toBeCalledTimes e toBeCalledWith servem para garantir respectivamente, o número de chamadas ao nosso fetch e que ele foi chamado com os argumentos corretos