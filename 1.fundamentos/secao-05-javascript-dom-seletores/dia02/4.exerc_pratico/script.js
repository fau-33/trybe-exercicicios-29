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