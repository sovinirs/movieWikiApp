class MovieWiki {
    constructor(){
        this.apikey = 'cf38afa8';
    }

    async getMovie(movieName){
        const fetchMovie = await fetch(`http://www.omdbapi.com/?s=${movieName}&apikey=cf38afa8`);

        const movie = await fetchMovie.json();

        return movie;
    }
}