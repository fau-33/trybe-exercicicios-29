import React from 'react';
import './App.css';
import ValidEmail from './ValidEmail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
    }
  }

  changeEmail(value) {
    this.setState({ email: value })
  };

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: ''})
  }



  render() {
    const { email, saveEmail } = this.state;

    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input 
            type="email"
            value={ email }
            id="id-email"
            onChange={ (e) => this.changeEmail(e.target.value)}
           />
        </label>
        <input
          id="btn-enviar"
          type="button" 
          data-testid="id-send" 
          value="Enviar" 
          onClick={() => this.changeSaveEmail(email)}
          />
        <input id="btn-back" type="button" value="Voltar" />
        <ValidEmail email={ saveEmail } />
      </div>
    );
  }
}

export default App;
