import React, { Component } from 'react';
import SelectInput from './SelectInput';
import AnecdoteInput from './AnectdoteInput';
import NameInput from './NameInput';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      age: '',
      anecdote: '',
      terms: false,
      formularioComErros: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleError() {
    const { name, email, age, anecdote, terms } = this.state;

    // Criamos um array com os dados obrigatórios.
    // Note que estamos usando a propriedade length.
    // Caso o length seja 0, então !campo.length será
    // true
    const errorCases = [
      !name.length,
      !email.match(/^\S+@\S+$/i),
      !age.length,
      !anecdote.length,
      !terms,
    ];

    // Caso haja algum campo que não seja true,
    // formularioPreenchido estará como false
    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      // Armazenamos o valor inverso no nosso estado
      // para sabermos se o formulário possui erros
      formularioComErros: !formularioPreenchido,
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
        // Após alterarmos o estado, chamamos a função que
        // verificará os erros.
      },
      this.handleError
    );
  }

  render() {
    const { name, email, age, anecdote, terms, formularioComErros } =
      this.state;

    return (
      <div>
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className="form">
          <fieldset>
            <legend>Informações pessoais</legend>

            <NameInput name={name} handleChange={this.handleChange} />

            <label htmlFor="email">
              Email:
              <input
                id="email"
                name="email"
                type="email"
                onChange={this.handleChange}
                value={email}
              />
            </label>

            <SelectInput age={age} handleChange={this.handleChange} />
          </fieldset>

          <fieldset>
            <legend>Texto e arquivos</legend>

            <AnecdoteInput
              anecdote={anecdote}
              handleChange={this.handleChange}
            />

            <input type="file" />
          </fieldset>

          <label htmlFor="terms">
            <input
              id="terms"
              type="checkbox"
              name="terms"
              onChange={this.handleChange}
              value={terms}
            />
            Concordo com termos e acordos
          </label>
        </form>
        {formularioComErros ? (
          <span style={{ color: 'red' }}>Preencha todos os campos</span>
        ) : (
          <span style={{ color: 'green' }}>Todos campos foram preenchidos</span>
        )}
      </div>
    );
  }
}

export default Form;
