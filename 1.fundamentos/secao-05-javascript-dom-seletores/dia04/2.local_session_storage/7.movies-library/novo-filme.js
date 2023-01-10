const form = document.querySelector('form');
const inputTitle = form.querySelector('#title');
const inputCover = form.querySelector('#cover');
const checkboxWhatched = form.querySelector('#watched');



const submitNewMovie = (event) => {
  event.preventDefault();

  const movies = JSON.parse(localStorage.getItem('movies')) || [];

  const newMovie = {
    title: inputTitle.value,
    cover: inputCover.value,
    watched: checkboxWhatched.checked
  }

  movies.push(newMovie);

  inputTitle.value = '';
  inputCover.value = '';
  checkboxWhatched.checked = false;

  localStorage.setItem('movies', JSON.stringify(movies));

  location.href = 'index.html';
}

form.addEventListener('submit', submitNewMovie);