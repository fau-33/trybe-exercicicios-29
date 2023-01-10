// Há, ao todo, as seguintes propriedades:

//parentNode: retorna o nó pai.
//parentElement: retorna o elemento pai.
//childNodes: retorna um NodeList com todos os nós filhos.
//children: retorna um HTMLCollection com todos os elementos filhos.
//firstChild: retorna o primeiro nó filho.
//firstElementChild: retorna o primeiro elemento filho.
//lastChild: retorna o último nó filho.
//lastElementChild: retorna o último elemento filho.
//nextSibling: retorna o próximo nó.
//nextElementSibling: retorna o próximo elemento.
//previousSibling: retorna o nó anterior.
//previousElementSibling: retorna o elemento anterior.

// 1.Acesse o elemento elementoOndeVoceEsta.

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// 2.Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';

// 3.Acesse o primeiroFilhoDoFilho e adicione um texto a ele.

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerHTML = 'primeiroFilhoDoFilho';

// 4.Acesse o primeiroFilho a partir de pai.

const primeiroFilho = pai.firstElementChild;

// 5.Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

// 6.Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

const textElement = elementoOndeVoceEsta.nextSibling;

// 7.Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// 8.Agora acesse o terceiroFilho a partir de pai.

const terceiroFilho2 = pai.lastElementChild.previousElementSibling;
console.log(terceiroFilho2);
