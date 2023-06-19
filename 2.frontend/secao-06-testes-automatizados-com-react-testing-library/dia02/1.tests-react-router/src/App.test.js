import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App  from './App';

describe('teste da aplicação toda', () => {

  it('deve renderizar o componente App', () => {
    renderWithRouter(<App />);
  
    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
    expect(homeTitle).toBeInTheDocument();
  });

  it('deve renderizar o componente Sobre', () => {
    const { history } =renderWithRouter(<App />);
    const linkToAbout = screen.getByRole('link', {name: /sobre/i});
    expect(linkToAbout).toBeDefined();

    userEvent.click(linkToAbout);
    const {location: {pathname}} = history;
    const title = screen.getByRole('heading', {name: /'Você está na página Sobre'/i});
    expect(pathname).toBe('/about');
    expect(title).toBeDefined();
  });
  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/pagina/que-nao-existe/');
    })

    const notFoundTitle = screen.getByRole('heading',
      { name: 'Página não encontrada' });
    expect(notFoundTitle).toBeInTheDocument();
  });

});
