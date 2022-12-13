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