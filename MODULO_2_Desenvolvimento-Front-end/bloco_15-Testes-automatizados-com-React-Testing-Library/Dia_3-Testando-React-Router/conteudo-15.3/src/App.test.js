import React from 'react';
import { fireEvent } from '@testing-library/react'; // podemos interagir com os elementos da tela (ex clicar no link sobre)
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';

// só pode haver um export default por arquivo (que faz o componente ser importável sem as chaves {} ) e o App tomou esse espaço, então os outros componentes exportados ficam em "segundo plano". Por isso, para serem importados corretamente, necessitam de {}

describe('teste da aplicação toda', () => {
  it('deve renderizar o componente App', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText(/Você está na página Início/);
    expect(home).toBeInTheDocument();
  });

  // Ao clicar no link About em nossa aplicação verifica se estamos na página correta
  it('deve renderizar o componente Sobre', () => {
    const { getByText, history } = renderWithRouter(<App />); // primeiro renderizamos o componente
    // history é atualizado à medida que clicamos
    
    fireEvent.click(getByText(/Sobre/i)); // buscando o botão pelo texto
    
    const pathname = history.location.pathname; // verifica se estamos na página correta (testando a rota, conforme está no expect abaixo:)
    // const { pathname } = history.location;
    
    expect(pathname).toBe('/about'); //verifica tb se o texto que aparece quando clicamos nesse link no navegador foi encontrado (abaixo)
    const aboutAll = getByText(/Você está na página Sobre/); // testando o texto
    expect(aboutAll).toBeInTheDocument();
  });

  // testando a página que deveria aparecer ao digitar na barra de endereços uma página que não existe
  // se esta pagina não existe, só verifica se digitar a rota direto no navegador, mas teste não tem acesso ao navegaor, para isso uso o history tb
  it('deve testar um caminho não existente e a renderização do Not Found', () => { 
    const { getByText, history } = renderWithRouter(<App />);
    
    history.push('/pagina/que-nao-existe/'); // utilizamos a função history.push() e passamos como argumento algum link que não existe dentro da aplicação (isso simula o digitar a rota na url e dar enter)
    
    const noMatch = getByText(/Página não encontrada/i); // testa se o texto que aparece no navegador, ao digitar um caminho para uma página que não existe, é encontrado
    expect(noMatch).toBeInTheDocument();
  });

  // posso usar o renderWithRouter com qqr componente
  // testando um componente separadamente (necessário importar, alterada linha 4 do import)
  it('deve renderizar o componente About (apenas componente)', () => {
    const { getByText } = renderWithRouter(<About />);
    const aboutOnly = getByText(/Você está na página Sobre/i);
    
    expect(aboutOnly).toBeInTheDocument();
  });

});
