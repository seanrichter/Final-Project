const router = require("express").Router();
const movieRoutes = require("./movieAPI");
const cocktailRoutes = require("./cocktail");
const recipeRoutes = require("./recipe");

router.use("/movie", movieRoutes);
router.use("/cocktail", cocktailRoutes);
router.use("/recipe", recipeRoutes);

module.exports = router;
