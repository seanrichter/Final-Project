const router = require("express").Router();
const movieRoutes = require("./movieAPI");
const cocktailRoutes = require("./cocktail");
const recipeRoutes = require("./recipe");
const albumRoutes = require("./album")

router.use("/movie", movieRoutes);
router.use("/cocktail", cocktailRoutes);
router.use("/recipe", recipeRoutes);
router.use("/album", albumRoutes);

module.exports = router;
