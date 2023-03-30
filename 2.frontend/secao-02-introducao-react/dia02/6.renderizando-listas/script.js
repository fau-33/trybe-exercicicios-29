const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];

// o console log foi adicionado para facilitar a compreensão
const items = shoppingList.map((item) => {
  console.log('item: ', item);
  return ({ item });
});

import React from 'react';

class App extends React.Component {
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const items = shoppingList.map((item) => {
      console.log('item: ', item);
      return (<li key={ index }>{ item }</li>);
    });

    return (
      <div>
        <h2>Lista de compras</h2>
        <ul>
          { items }
        </ul>
      </div>
    );
  }
}

export default App;

/* const items = shoppingList.map((item, index) => (
  <li key={ index }>{ item }</li>
)); */