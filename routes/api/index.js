const router = require("express").Router();
const movieRoutes = require("./movie");
const cocktailRoutes = require("./cocktail");

router.use("/movie",movieRoutes);
router.use("/cocktail",cocktailRoutes);


module.exports = router;

