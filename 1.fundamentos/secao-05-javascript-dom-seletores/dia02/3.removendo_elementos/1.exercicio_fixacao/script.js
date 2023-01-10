// Remova a tag h2, filha do elemento elementoOndeVoceEsta.

/* const pai = document.getElementById('pai');
const todosOsFilhos = pai.childNodes; */

/* for (let index = todosOsFilhos.length - 1; index >= 0; index -= 1) {
  const filhoAtual = todosOsFilhos[index];

  if (filhoAtual.id === 'elementoOndeVoceEsta') {
    filhoAtual.removeChild(filhoAtual.firstElementChild);
    console.log(filhoAtual);
  }
}
 */

const pai = document.getElementById('elementoOndeVoceEsta');
pai.removeChild(pai.firstElementChild);

console.log(pai);

