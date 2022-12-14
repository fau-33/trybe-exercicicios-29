// 🚀 Exercícios - aprofunde seu conhecimento

// 1.Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;

const elementH1 = document.createElement('h1');
elementH1.innerHTML = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(elementH1);

// 2.Adicione a tag main com a classe main-content como filho da tag body;

const elementMain = document.createElement('main');
elementMain.className = 'main-content';
document.body.appendChild(elementMain);

// 3.Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const elementSectionCenter = document.createElement('section');
elementSectionCenter.className = 'center-content';
elementMain.appendChild(elementSectionCenter);

// 4.Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

const paragraph = document.createElement('p');
paragraph.innerHTML = 'Hello World!!!';
elementSectionCenter.appendChild(paragraph);

// 5.Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

const elementSectionLeft = document.createElement('section');
elementSectionLeft.className = 'left-content';
elementMain.appendChild(elementSectionLeft);

// 6.Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

const elementSectionRight = document.createElement('section');
elementSectionRight.className = 'right-content';
elementMain.appendChild(elementSectionRight);

// 7.Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

const elementImage = document.createElement('img');
elementImage.className = 'small-image';
elementImage.src = 'https://picsum.photos/200';
elementSectionLeft.appendChild(elementImage);

// 8.Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;

const elementUl = document.createElement('ul');
elementSectionRight.appendChild(elementUl);
const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
'Sete', 'Oito', 'Nove', 'Dez'];
for (let num in arrayNumbers) {
  const elementLi = document.createElement('li');
  elementLi.innerHTML = arrayNumbers[num];
  elementUl.appendChild(elementLi);
}

// 9.Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

for (let index = 1; index <= 3; index +=1) {
  const elementH3 = document.createElement('h3');
  elementH3.innerHTML = 'Show ' + index;
  elementMain.appendChild(elementH3);
}