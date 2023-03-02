import React from "react";


class App extends React.Component {
  constructor() {
    super();
    this.handleButtonOne = this.handleButtonOne.bind(this)
    this.handleButtonTwo = this.handleButtonTwo.bind(this)
    this.handleButtonThree = this.handleButtonThree.bind(this)

  }
  handleButtonOne() {
    console.log(this);
    console.log('Clicou no botão 1!!');
  }

  handleButtonTwo() {
    console.log(this);
    console.log('Clicou no botão 2!!');
  }

  handleButtonThree() {
    console.log(this);
    console.log('Clicou no botão 3!!');
  }
  render() {
    return(
      <div>
        <button type="button" onClick={this.handleButtonOne}>Botão 1</button>
        <button type="button" onClick={this.handleButtonTwo}>Botão 2</button>
        <button type="button" onClick={this.handleButtonThree}>Botão 3</button>
      </div>
    );
  }
}

export default App;