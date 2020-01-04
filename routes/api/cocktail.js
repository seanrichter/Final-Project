

const router = require("express").Router();
const cocktail = require("../../controllers/cocktailController");



// MATCHES with /api/recipe/:id
router.route("/")
    .get(cocktail.findRandom)


module.exports = router;
