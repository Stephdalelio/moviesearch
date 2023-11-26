
document.addEventListener('DOMContentLoaded', () => {

    displayResults();
  });
  
  function displayResults() {
    const resultsContainer = document.getElementById('searchResults');
  
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('q');
  
    resultsContainer.innerHTML = `<h2>Search Results for "${searchQuery}"</h2>`;
  
  }
  