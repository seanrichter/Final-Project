const axios = require("axios");

const myFoodTypes = ["chicken", "fish", "beef", "vegetarian", "steak", "salad"];
const random = require("random");
console.log(myFoodTypes[random.int((min = 0), myFoodTypes.length - 1)]);

const mapRecipe = function(recipe) {
  let returnArray = recipe.hits.map(recipeMapper);

  return returnArray;
};

function recipeMapper(rec, index) {
  if (index === 0) {
    console.log(rec);
  }
  return {
    key: index,
    name: rec.recipe.label,
    calories: rec.recipe.calories.toFixed(0),
    ingredients: rec.recipe.ingredientLines,
    image: rec.recipe.image
  };
}

module.exports = {
  findRandom: function(req, res) {
    console.log("recipe");
    axios
      .get(
        "https://api.edamam.com/search?q=" +
          myFoodTypes[random.int((min = 0), myFoodTypes.length - 1)] +
          "&app_id=d724ee63&app_key=6a4273e59f6eb91328c8827129565842"
      )
      //.then(result => {console.log(result);res.j})
      .then(result => {
        console.log(result.data);
        res.json(mapRecipe(result.data));
      })
      .catch(err => res.status(422).json(err));
  }
};
