import Axios from "axios";



export default {
    // Gets all movies
    getMovies: function() {
      return Axios.get("/api/movie");
    },
    // Gets the movie with the given id
    getMovie: function(id) {
      return Axios.get("/api/movie/" + id);
    },
    // Deletes the movie with the given id
    deleteMovie: function(id) {
      return Axios.delete("/api/movie/" + id);
    },
    // Saves a movie to the database
    saveMovie: function(movieData) {
      return Axios.post("/api/movie", movieData);
    },
    // Gets a random cocktail
    getRandomCocktail: function() {
    
      return Axios.get("/api/cocktail");
    }
  };
  