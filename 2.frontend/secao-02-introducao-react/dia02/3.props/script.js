// Props
// As props são umas das partes mais importantes de um componente. São por elas que passamos os valores para o componente, e é como o torna reutilizável em diferentes contextos. Elas são como os parâmetros de uma função.

// Observe o exemplo abaixo de como seria uma função que retornaria a mesma mensagem que o componente Greeting renderiza:

/* function greeting(name){
  return `Hello, ${name}`;
}
console.log(greeting('Samuel'));
 */

/* function greeting(name, lastName){
  return `Hello, ${name} ${lastName}`;
}
console.log(greeting('Samuel', 'Silva')); */

/* import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} {this.props.lastName}</h1>;
  }
}

export default Greeting; */

/* import React from 'react';

class Greeting extends React.Component {
  render() {
    const { name, lastName } = this.props;
    return <h1>Hello, {name} {lastName}</h1>;
  }
}

export default Greeting; */

// Agora o chamamos dentro do componente App:

import React from 'react';
import Greeting from './Greeting';

class App extends React.Component {
  render() {
    return (
      <main>
        <Greeting name="Samuel" lastName="Silva" />
      </main>
    );
  }
}

export default App;