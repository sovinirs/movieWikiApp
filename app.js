// Initialize MovieWiki Class
const movieWiki = new MovieWiki;
const ui = new UI;
const movie = new Movie;

document.querySelector(".btn").addEventListener('click', () => {
    const movieName = document.getElementById("searchMovie").value;

    if(movieName === ''){
        ui.showAlert("Enter a movie name...","alert alert-danger");
        console.log("Enter a valid movie name");
    } else {
        movieWiki.getMovie(movieName)
        .then(data => {
            if(data.Response === "True"){
                // Call show movies method
                ui.showMovies(data);
            } else {
                ui.showAlert("There was an error. Couldn't fetch the movie details...", "alert alert-danger");
            }
        })
    }
});


