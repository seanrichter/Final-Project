const axios = require("axios");

const myMovieTypes = ["action", "music", "comedy", "drama", "history", "science fiction"];
const random = require("random");
console.log(myMovieTypes[random.int((min = 0), myMovieTypes.length - 1)]);

const mapMovie = function(movie) {
  let returnArray = movie.results.map(movieMapper);

  return returnArray;
};

function movieMapper(rec, index) {
  if (index === 0) {
    console.log(rec);
  }
  return {
    key: index,
    title: rec.original_title,
    overview: rec.overview,
    release: rec.release_date,
    image: "https://image.tmdb.org/t/p/w500_and_h282_face/" + rec.poster_path
  };
}

module.exports = {
  findRandom: function(req, res) {
    console.log("movie");
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=06623bab37e705cfc60206205f7ca482&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      )
      //.then(result => {console.log(result);res.j})
      .then(result => {
        console.log(result.data);
        res.json(mapMovie(result.data));
        // res.json(result.data)
      })
      .catch(err => res.status(422).json(err));
  }
};
