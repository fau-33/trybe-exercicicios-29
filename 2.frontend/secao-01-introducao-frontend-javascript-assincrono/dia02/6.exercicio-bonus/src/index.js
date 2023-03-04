const getDogButton = document.querySelector("#random-dog");
const getCatButton = document.querySelector("#random-cat");
const petImage = document.querySelector("#random-pet-image");
const supriseMeButton = document.querySelector("#suprise-me");
import './style.css';

getDogButton.addEventListener('click', () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      const petURL = data.message;
      petImage.src = petURL;
    })
});

getCatButton.addEventListener('click', () => {
  fetch("https://aws.random.cat/meow")
    .then((res) => res.json())
    .then((data) => {
      const petURL = data.file;

      petImage.src = petURL;

    })

});

supriseMeButton.addEventListener('click', () => {
  Promise.any([
    fetch("https://aws.random.cat/meow"),
    fetch("https://dog.ceo/api/breeds/image/random"),
  ])
  .then((res) => res.json())
  .then((data) => {
    const petURL = data.file || data.message;
    petImage.src = petURL;
  })
});