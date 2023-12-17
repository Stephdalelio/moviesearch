//http://www.omdbapi.com/?i=tt3896198&apikey=e09b1eb3


const apiKey = "e09b1eb3";
const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}`;
const movieListEl = document.querySelector(".movie-list");

async function onSearchChange(input) {
  const movies = await fetch(`${apiUrl}&s=${input}`);
  const movieData = await movies.json();

  if (movieData.Search) {
    movieListEl.innerHTML = movieData.search.map((movie) =>
      movieHTML(movie)
    ).join("");
  }
}

function handle(event) {
  event.preventDefault();
  const inputElement = document.getElementById("searchForm");
  const input = inputElement.value;
  onSearchChange(input);
}

async function getMovie() {
  const movies = await fetch(`${apiUrl}&s=""`); 
  const movieData = await movies.json();
  movieListEl.innerHTML = movieData.Search.map((movie) =>
    movieHTML(movie)
  ).join("");
}

getMovie();

function movieHTML(movie) {
  return `<div class="movie-list">
  <div class="movie">
  <div class="movie__post">
  <div class="movie__post--container">
  <figure>
      <img class="movie__img" src=${movie.image}>
  </figure>
    <h3>${movie.title}</h3>
      <p><b>Release:</b> ${movie.year}</p>
      <p><b>Genre:</b>${movie.genre}</p>
    </div>
</div>
</div>
</div>`;
}