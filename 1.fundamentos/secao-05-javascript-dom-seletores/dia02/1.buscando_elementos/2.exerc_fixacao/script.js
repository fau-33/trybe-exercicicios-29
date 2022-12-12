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


console.log(primeiroFilhoDoFilho);