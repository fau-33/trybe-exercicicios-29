import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event) {
    this.setState({
      email: event.target.value,
    });
  }


  render() {
    const { email } = this.state

    
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="name">
          <label htmlFor="name">
            Nome:
            <input type="text" name="name" id="name" />
          </label>

          <label htmlFor="email">
            Email:
            <input
              id="email"
              name="email"
              type="email"
              onChange={ this.handleChange }
              value={ email }
            />
          </label>

          <label htmlFor="age">
            Idade:
            <select name="age" id="age" defaultValue="">
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="underage">Menor que 18</option>
            </select>
          </label>

          <label htmlFor="anecdote">
            Anedota:
            <textarea name="anecdote" id="anecdote" cols="30" rows="10"></textarea>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
