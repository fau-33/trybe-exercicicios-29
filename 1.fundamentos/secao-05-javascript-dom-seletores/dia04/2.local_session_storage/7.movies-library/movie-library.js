const movieLibrary = document.querySelector('#movie-library');

const loadMovies = () => {
  const movies = JSON.parse(localStorage.getItem('movies')) || [];
  console.log(movies);
}

const onload = () => {
  loadMovies();
}

window.onload = onLoad