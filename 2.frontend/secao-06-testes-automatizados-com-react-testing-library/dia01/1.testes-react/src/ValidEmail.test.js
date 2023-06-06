import React from "react";
import { render, screen } from "@testing-library/react";
import ValidEmail from "./ValidEmail";

test('Testando componente, caso o email seja válido', () => {
  const EMAIL_USER = 'teste@teste.com';
  render(<ValidEmail email={ EMAIL_USER} />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});
test('Testando um componente, caso o email seja inválido', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER} />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});
test('Testando se o componente não aperece caso o email esteja vazio', () => {
  render(<ValidEmail email="" />);
  const isValidText = screen.queryByTestId('id-is-email-valid');
  expect(isValidText).not.toBeInTheDocument();
});
test('Testando se o componente possui texto verde ao ser digitado como email válido', () => {
  const EMAIL_USER = 'teste@teste.com';

  render(<ValidEmail email={EMAIL_USER} />);
  const isValid = screen.getByTestId('id-is-email-valid');
  expect(isValid).toHaveAttribute('class', 'green-text');
});
test('Testando se o componente possui texto vermelho ao ter digitado o email errado', () => {
  const EMAIL_USER = 'emailerrado';

  render(<ValidEmail email={EMAIL_USER} />);
  const isValidText = screen.getByTestId('id-is-email-valid');
  expect(isValidText).toHaveAttribute('class', 'red-text');
});