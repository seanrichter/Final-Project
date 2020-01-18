const router = require("express").Router();
const album = require("../../controllers/albumController");

// MATCHES with /api/album/:id
router.route("/").get(album.findRandom);

module.exports = router;