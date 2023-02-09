import validator from 'validator';
import './style.css';

const campoTexto = document.querySelector('#value');
const button = document.querySelector('#button');
const seletor = document.querySelector('#option');
const textoDeSaida = document.querySelector('#answer');

const UUID_VERSION = 4;

button.addEventListener('click', (event) => {
  event.preventDefault();

  const campos = {
    cpf: validator.isTaxID(campoDeTexto.value, 'pt-BR'),
    hexColor: validator.isHexColor(campoDeTexto.value),
    email: validator.isEmail(campoDeTexto.value),
    uuid: validator.isUUID(campoDeTexto.value, UUID_VERSION),
    url: validator.isURL(campoDeTexto.value),
  };

  textoDeSaida.innerHTML = `A validação retornou ${campos[seletor.value]}`;


});