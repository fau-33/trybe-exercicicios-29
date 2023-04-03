// 1 - Criando o store


const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

// 6 - Crie um botão com o texto Random color, um eventListener e uma action no reducer, adicionando uma cor aleatória ao array colors guardado em nosso estado inicial. Faça também com que essa cor seja mostrada ao ser criada, alterando o estado index para a posição dela

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

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
    case 'RANDOM_COLOR':
      return {
        ...state,
        colors: [...state.colors, criarCor() ],
        index: state.colors.length,
      }  
    default:
      return state;    
  }
};

// 4 - Crie eventListeners que escutam os cliques de cada botão, o Previous color e o Next color, e realizam um dispatch com as respectivas actions.

const store = Redux.createStore(reducer);

const btnPrevious = document.getElementById('previous');
const btnNext = document.getElementById('next');
const btnRandom = document.getElementById('random');

btnPrevious.addEventListener('click', () => {
  store.dispatch({type: 'PREVIOUS_COLOR'});
});

btnNext.addEventListener('click', () => {
  store.dispatch({type: 'NEXT_COLOR'});
});

btnRandom.addEventListener('click', () => {
  store.dispatch({type: 'RANDOM_COLOR'});
});

// 5 - Faça o subscribe da store, alterando o innerHTML da tag com id value para a cor atual e o style do elemento com id container. Você deverá ser capaz de ver as cores mudando ao fundo e o nome da cor exibida.

store.subscribe(() => {
  const {colors, index} = store.getState();
  document.getElementById('value').innerHTML = colors[index];
  document.getElementById('container').style.backgroundColor = colors[index];
});


