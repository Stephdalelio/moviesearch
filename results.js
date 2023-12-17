//http://www.omdbapi.com/?i=tt3896198&apikey=e09b1eb3



async function main() {
    const movie = localStorage.getItem("movie");
    const movie = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${movie}`)
    const movieData = await movie.json();
    movieData.map(movie =>

        `<div class="movie-list">
        <div class="movie__post">
            <div class="movie__title">
                <h2>${movie.title}</h2>
                </div>
                <p class="movie__body">
                <h2>${movie.body}</h2>
                </p>
            </div>
        </div>`)
        .join("")
    
}
    main();