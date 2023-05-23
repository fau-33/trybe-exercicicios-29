const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const preEl = document.querySelector('pre');
import Swal from 'sweetalert2';

buttonEl.addEventListener('click', handleClick);

export async function handleClick() {
  const cep = document.querySelector('input').value;

  try {
    const addressData = await getAddressFromCep(cep);
    document.querySelector('pre').innerHTML = JSON.stringify(addressData);
  } catch (error) {
    alert(error.message);
  }
}
