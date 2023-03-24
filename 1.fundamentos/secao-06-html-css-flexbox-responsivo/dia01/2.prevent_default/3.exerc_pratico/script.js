
function handleSubmit (event) {
  event.preventDefault();
  const validation = textInputValidation();
  if (validation === false) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}

function clearFields () {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');

  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    if (formElements[index].type === 'radio' || formElements[index].type === 'checkbox') {
      userInput.checked = false;
    } else {
      userInput.checked = '';
    }
  }
  textArea.value = '';
}

function enableSubmit() {
  const submitBtn = document.querySelector('#btn-submit');
  const agreement = document.querySelector('#agreement');
  submitBtn.disabled = !agreement.checked;
}



function textInputValidation() {
  const email = document.querySelector('#email').value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector('#fullName').value.length;
  const invalidName = name < 10 || name > 40;

  const reason = document.querySelector('#why').value.length;
  const invalidReason = reason > 500;

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  }
  else {
    return true;
  }
}




window.onload = function () {
  const clearBtn = document.querySelector('#btn-clear');
  clearBtn.addEventListener('click', clearFields);
  const submitBtn = document.querySelector('#btn-submit');
  submitBtn.addEventListener('click', handleSubmit);
  const agreement = document.querySelector('#agreement');
  agreement.addEventListener('change', enableSubmit);
}