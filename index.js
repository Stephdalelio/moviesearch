
document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    searchMovies();
  });

async function searchMovies() {

    const input = document.getElementById('searchInput').value.trim();
  
    
    if (input !== '') {

        window.location.href = `http://www.omdbapi.com/?apikey=${apiKey}&s=${input}`;

    } else {
     
      displayError('Please enter a search term.');
    }
  }
  
  function displayResults(results) {
    
    const resultsContainer = document.getElementById('searchResults');
  
    
    resultsContainer.innerHTML = '';
  
   
    const moviesElements = results.map(movie => {
      const movieElement = document.createElement('div');
      movieElement.innerHTML = `<div class="movie__post">
      <div class="movie__title">
          ${movie.title}
          </div>
          <p class="movie__body">
          ${movie.body}
          </p>
      </div>`);

      return movieElement;
    };
  
    resultsContainer.append(...moviesElements);
  
  function displayError(errorMsg) {
    const resultsContainer = document.getElementById('searchResults');
  
  
    resultsContainer.innerHTML = `<p style="color: red;">Error: ${errorMsg}</p>`;
  }
  