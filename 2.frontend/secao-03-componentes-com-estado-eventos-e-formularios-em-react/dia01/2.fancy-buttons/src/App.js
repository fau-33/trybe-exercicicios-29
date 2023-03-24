import React from "react";


class App extends React.Component {
  constructor() {
    super();
    this.handleButtonOne = this.handleButtonOne.bind(this)
    this.handleButtonTwo = this.handleButtonTwo.bind(this)
    this.handleButtonThree = this.handleButtonThree.bind(this)

    // Estado Inicial
    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    }

  }
  // Estado 2 nas funções
  handleButtonOne() {
    const { clicksBtnOne } = this.state;
    this.setState((prevState) => ({
      clicksBtnOne: prevState.clicksBtnOne + 1,
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(clicksBtnOne)}`);
    });
  }

  handleButtonTwo() {
    const { clicksBtnTwo } = this.state;
    this.setState((prevState) => ({
      clicksBtnTwo: prevState.clicksBtnTwo + 1,
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(clicksBtnTwo)}`);
    });
  }

  handleButtonThree() {
    const { clicksBtnThree } = this.state;
    this.setState((prevState) => ({
      clicksBtnThree: prevState.clicksBtnThree + 1,
    }), () => {
      console.log(`Botão 3 ${this.getButtonColor(clicksBtnThree)}`);
    });
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'yellow';
  }

render() {
  const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
  return (
    <div>
      <button
        type="button"
        onClick={ this.handleButtonOne }
        style={ { backgroundColor: this.getButtonColor(clicksBtnOne) } }
      >
        {`Cliques botão 1: ${clicksBtnOne}`}
      </button>
      <button
        type="button"
        onClick={ this.handleButtonTwo }
        style={ { backgroundColor: this.getButtonColor(clicksBtnTwo) } }
      >
        {`Cliques botão 2: ${clicksBtnTwo}`}
      </button>
      <button
        type="button"
        onClick={ this.handleButtonThree }
        style={ { backgroundColor: this.getButtonColor(clicksBtnThree) } }
      >
        {`Cliques botão 3: ${clicksBtnThree}`}
      </button>
    </div>
  );
}

}

export default App;