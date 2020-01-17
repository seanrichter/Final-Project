const router = require("express").Router();
const movie = require("../../controllers/tmdbController");

// MATCHES with /api/movie/:id
router.route("/").get(movie.findRandom);

module.exports = router;