import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Verificando se existe um campo Email', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
 
});
test('Verificando se existe dois botões', () => {
  render(<App />);
  const btn = screen.getAllByRole('button');
  expect(btn).toHaveLength(2);
});
test('Verificando se existe o botão de enviar', () => {
  render(<App />);
  const btnSend = screen.getByTestId('id-send');
  expect(btnSend).toBeInTheDocument();
  expect(btnSend).toHaveProperty('type', 'button');
  expect(btnSend).toHaveValue('Enviar');
});
test('Verificando se o botão e o campo email estão funcionando.', () => {
  // Acessar od elementos da tela
  render(<App />);
  const inputEmail = screen.getByLabelText("Email");
  const button = screen.getByTestId("id-send");
  const userEmail = screen.getByTestId("id-email-user");

  // Interagir com os elementos (se for necessário)
  userEvent.type(inputEmail, 'teste@teste.com');
  userEvent.click(button);

  // Fazer os testes
  expect(inputEmail).toHaveValue("");
  expect(userEmail).toHaveTextContent("Valor: teste@teste.com");
  
});
