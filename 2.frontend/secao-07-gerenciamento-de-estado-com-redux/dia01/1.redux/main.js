// 1 - Criando o store


const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

// 2 - Crie um reducer, implementando um switch que retorne apenas o estado inicial como default
// 3 - Incremente o switch criado no passo anterior com os cases NEXT_COLOR e PREVIOUS_COLOR. Essas actions devem alterar o valor index guardado no INITIAL_STATE.
const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };
    default:
      return state;    
  }
};

// 4 - Crie eventListeners que escutam os cliques de cada botão, o Previous color e o Next color, e realizam um dispatch com as respectivas actions.

const store = Redux.createStore(reducer);

const btnPrevious = document.getElementById('previous');
const btnNext = document.getElementById('next');

btnPrevious.addEventListener('click', () => {
  store.dispatch({type: 'PREVIOUS_COLOR'});
  
});

btnNext.addEventListener('click', () => {
  store.dispatch({type: 'NEXT_COLOR'});
  
});

