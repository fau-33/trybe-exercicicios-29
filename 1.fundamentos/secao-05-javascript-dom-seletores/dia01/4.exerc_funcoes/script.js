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

// 3.Crie e execute uma função que mude a cor do quadrado vermelho para branco;

const changeSquareToWhite = () => {
  let squareRed = document.getElementsByClassName('center-content')[0];
  squareRed.style.backgroundColor = 'white';
}

changeSquareToWhite();

// 4.Crie e execute uma função que corrija o texto da tag <h1>;

const correctTitle = () => {
  let title = document.getElementsByTagName('h1')[0];
  title.innerHTML = "Desafio - Javascript";
}

correctTitle();

// 5.Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo;

const paragraphUppercase = () => {
  let paragraph = document.getElementsByTagName('p')[0];
  paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
}

paragraphUppercase();

// 6.Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.

const showParagraph = () => {
  let allParagraph = document.getElementsByTagName('p');

  for (let index = 0; index < allParagraph.length; index += 1) {
    console.log(allParagraph[index].innerHTML);
  }
}

showParagraph();