const movieLibrary = document.querySelector('#movie-library');

const createMovieElement = (movieObj) => {
  const div = document.createElement('div');
  const img = document.createElement('img');
  const h1 = document.createElement('h1');
  const h2 = document.createElement('h2');

  img.src = movieObj.cover;
  h1.textContent = movieObj.title;

  if (movieObj.watched) {
    h2.textContent = 'Assistido';
  } else {
    h2.textContent = 'Não Assistido';
  }

  div.appendChild(img);
  div.appendChild(h1);
  div.appendChild(h2);

  return div;
}

const loadMovies = () => {
  const movies = JSON.parse(localStorage.getItem('movies')) || [];

  for (let index = 0; index < movies.length; index += 1) {
    const movieElement = createMovieElement(movies[index]);
    movieLibrary.appendChild(movieElement);
  }
}

const onLoad = () => {
  loadMovies();
}

window.onload = onLoad