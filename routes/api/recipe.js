const router = require("express").Router();
const recipe = require("../../controllers/recipeController");

// MATCHES with /api/recipe/:id
router.route("/").get(recipe.findRandom);

module.exports = router;