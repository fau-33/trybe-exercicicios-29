// 1.Crie e execute uma função que mude o texto na tag <p>-----</p>, para uma descrição de como você se vê daqui a 2 anos;

const changeText = () => {
  let paragraph = document.getElementsByTagName('p')[1];
  paragraph.innerHTML = 'Está trabalhando e ganhando 3000 reais';
}

changeText();

// 2.Crie e execute uma função que mude a cor do quadrado amarelo para rgb(76,164,109);

const changeSquareToGreen = () => {
  let squareYellow = document.getElementsByClassName('main-content')[0];
  squareYellow.style.backgroundColor = 'rgb(76, 164, 79)';
}

changeSquareToGreen();