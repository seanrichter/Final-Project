const axios = require("axios");

const myAlbumTypes = ["disco", "folk", "rap", "metal", "alternative", "country"];
const random = require("random");
console.log(myAlbumTypes[random.int((min = 0), myAlbumTypes.length - 1)]);

const mapAlbum = function(album) {
  let returnArray = album.results.map(albumMapper);

  return returnArray;
};

function albumMapper(rec, index) {
  if (index === 0) {
    console.log(rec);
  }
  return {
    key: index,
    name: rec.albums.album.name,
    artist: rec.albums.album.artist,
    url: rec.albums.album.artist.url,
    image: rec.albums.album.image
  };
}

module.exports = {
  findRandom: function(req, res) {
    console.log("album");
    axios
      .get("http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=disco" +
      myAlbumTypes[random.int((min = 0), myAlbumTypes.length - 1)] +
      "&api_key=d1c318f891662637b6d67d98f8ca779d&format=json")


      //.then(result => {console.log(result);res.j})
      .then(result => {
        console.log(result.data);
        res.json(mapAlbum(result.data));
      })
      .catch(err => res.status(422).json(err));
  }
};
