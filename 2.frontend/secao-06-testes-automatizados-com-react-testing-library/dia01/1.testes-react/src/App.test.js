import React from 'react';
import { render, screen } from '@testing-library/react';
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