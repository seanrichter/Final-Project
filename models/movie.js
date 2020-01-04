const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: { type: String, required: true},
    director: {type: String, required: true},
    year: {type:Number, required: true},
    synopsis: {type:String, required:false},
    // synopsis: String,
    imageUrl:String,
    date: {type: Date, default:Date.now}
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;


