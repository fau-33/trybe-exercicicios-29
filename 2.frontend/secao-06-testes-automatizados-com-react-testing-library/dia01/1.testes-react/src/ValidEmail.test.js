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