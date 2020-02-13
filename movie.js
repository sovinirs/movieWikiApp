class Movie {
    // Get movie function
    selectedMovie(imdbID){
        sessionStorage.setItem('imdbID',imdbID);
        window.location = 'movie.html';
    }
    
    async getMovie(){
        try {
        const id = sessionStorage.getItem('imdbID');
        const fetchMovie = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=cf38afa8`);
        const movieResponse = await fetchMovie.json();
        let innerHTML = 
        `<div class="card card-body">
            <div class="row">
                <div class="col-4">
                    <a href="https://www.imdb.com/title/${movieResponse.imdbID}/">
                        <img class="rounded" src="${movieResponse.Poster}" width="315" height="472">
                    </a>
                </div>

                <div class="col-4">
                    <a href="https://www.imdb.com/title/${movieResponse.imdbID}/" class="text-warning"><h2>${movieResponse.Title}</h2></a>
                    <div><h3>${movieResponse.Year}</h3></div>
                    <h4 class="text-danger mt-4">Plot</h4>
                    <p class="text-fluid text-default">${movieResponse.Plot}</p>
                    <div class="row">
                        <div class="col text-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1600px-IMDB_Logo_2016.svg.png" height="30" width="70">
                            <div class="mt-2">${movieResponse.Ratings[0].Value}</div>
                        </div>
                        <div class="col text-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Rotten_Tomatoes_logo.svg/1382px-Rotten_Tomatoes_logo.svg.png" height="30" width="90">
                            <div class="mt-2">${movieResponse.Ratings[1].Value}</div>
                        </div>
                        <div class="col text-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Metacritic.svg" height="30" width="30">
                            <div class="mt-2">${movieResponse.Ratings[2].Value}</div>
                        </div>
                    </div>
                    <a href="https://www.imdb.com/title/${movieResponse.imdbID}" target="_blank" class="btn btn-primary mt-3">View in IMDB</a>
                    <a href="index.html" class="btn btn-primary ml-2 mt-3">Go back to search</a>
                </div>

                <div class="col-4">
                    <ul class="list-group">
                        <li class="list-group-item"><strong>Genre : </strong>${movieResponse.Genre}</li>
                        <li class="list-group-item"><strong>Rated : </strong>${movieResponse.Rated}</li>
                        <li class="list-group-item"><strong>Released : </strong>${movieResponse.Released}</li>
                        <li class="list-group-item"><strong>Runtime : </strong>${movieResponse.Runtime}</li>
                        <li class="list-group-item"><strong>Director : </strong>${movieResponse.Director}</li>
                        <li class="list-group-item"><strong>Writer : </strong>${movieResponse.Writer}</li>
                        <li class="list-group-item"><strong>Actors : </strong>${movieResponse.Actors}</li>
                    </ul>
                </div>
            </div>
        </div>`;
        const container = document.getElementById("movie");
        container.innerHTML = innerHTML;
        } catch (error) {
            this.showAlert("There has been an error. Try with some other movies","alert alert-danger")
        }

    }

    showAlert(message, className){
        // Create div
        const div = document.createElement("div");
        // Add Classes
        div.className = className;
        div.appendChild(document.createTextNode(message));
        // Get container element
        const container = document.querySelector(".movieDetail");
        // Get search element
        const search = document.querySelector(".row");
        // Insert alert
        container.insertBefore(div, search);
        window.location = "index.html";
    }
}