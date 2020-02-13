class UI {
    constructor(){
        this.movies = document.getElementById("movies");
    }

    // Create movie cards
    showMovies(data){
        let innerHTML = `<div class="card card-body">
        <div class="row">`;
        data.Search.forEach(element => {
            innerHTML += `<div class="col-md-3 col-sm-6 col-12">
            <a onclick="movie.selectedMovie('${element.imdbID}')" href="#">
                <img class="rounded img-fluid" src="${element.Poster}" width="210" height="315">
            </a>
            <div class="mt-2 mb-4">
                <a onclick="movie.selectedMovie('${element.imdbID}')" href="#" class="text-warning">${element.Title}</a>
                <div>${element.Year}</div>
            </div>
        </div>`
        });

        this.movies.innerHTML = innerHTML;
    }

    // Show Alert
    showAlert(message, className){
        // Create div
        const div = document.createElement("div");
        // Add Classes
        div.className = className;
        div.appendChild(document.createTextNode(message));
        // Get container element
        const container = document.querySelector(".searchContainer");
        // Get search element
        const search = document.querySelector(".search");
        // Insert alert
        container.insertBefore(div, search);

        // Timeout after 3 sec
        setTimeout(() => {
        this.clearAlert();
        }, 3000);

    }

    // Clear Alert
    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
        currentAlert.remove();
        }
    }
}