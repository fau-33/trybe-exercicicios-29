import React, { Component } from "react";
import SelectInput from "./SelectInput";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      age: '',
      anecdote: '',
      terms: false,
    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }


  render() {
    const { name, email, age, anecdote, terms } = this.state;


    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="name">
          <fieldset>
            <legend>Informações Pessoais</legend>

            <label htmlFor="name">
              Nome:
              <input
                type="text"
                name="name"
                id="name"
                onChange={this.handleChange}
                value={name}
              />
            </label>

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

            <SelectInput
              onChange={this.handleChange}
              age={age}
            />
          </fieldset>

          <fieldset>
            <legend>Texto e arquivos</legend>
          <label htmlFor="anecdote">
            Anedota:
            <textarea
              name="anecdote"
              id="anecdote"
              cols="30"
              rows="10"
              onChange={this.handleChange}
              value={anecdote}
            ></textarea>
          </label>

          <input type="file" />

          </fieldset>

          <label htmlFor="terms">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              onChange={this.handleChange}
              value={terms}
            />
            Concordo com termos e acordo
          </label>

        </form>
      </div>
    );
  }
}

export default Form;
