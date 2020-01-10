const axios = require("axios");

const mapRecipe = function(currentArray) {
  const returnArray = currentArray.map(recipe => {
    return {
      key: recipe.recipe.label,
      title: recipe.recipe.title,
      calories: recipe.recipe.calories,
      image: recipe.recipe.image,
      ingredients: [
        {
          key: 1,
          ingredients: recipe.recipe.ingredients
        },
        {
          key: 2,
          ingredients: recipe.recipe.ingredients
        },
        {
          key: 3,
          ingredients: recipe.recipe.ingredients
        },
        {
          key: 4,
          ingredients: recipe.recipe.ingredients
        },
        {
          key: 5,
          ingredients: recipe.recipe.ingredients
        }
      ]
    };
  });

  returnArray.forEach(element => {
    element.ingredients = element.ingredients.filter(
      x => x.ingredient !== null
    );
  });

  return returnArray;
};

module.exports = {
  findRandom: function(req, res) {
    console.log("cocktail");
    axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${APP_KEY}`
      )
      //.then(result => {console.log(result);res.j})
      .then(result => {
        console.log(result.data);
        res.json(mapRecipe(result.data.recipe));
      })
      .catch(err => res.status(422).json(err));
  }
};
