const axios = require("axios");

const mapCocktail = function (currentArray)
{
      
      const returnArray = currentArray.map(drink =>
            {
                  return{
                  name: drink.strDrink,
                  glass: drink.strGlass,
                  instructions: drink.strInstructions,
                  ingredients:[
                             {key:1, ingredient: drink.strIngredient1, measure: drink.strMeasure1},
                             {key:2, ingredient: drink.strIngredient2, measure: drink.strMeasure2},
                             {key:3, ingredient: drink.strIngredient3, measure: drink.strMeasure3},
                             {key:4, ingredient: drink.strIngredient4, measure: drink.strMeasure4},
                             {key:5, ingredient: drink.strIngredient5, measure: drink.strMeasure5},
                             {key:6, ingredient: drink.strIngredient6, measure: drink.strMeasure6},
                             {key:7, ingredient: drink.strIngredient7, measure: drink.strMeasure7},
                             {key:8, ingredient: drink.strIngredient8, measure: drink.strMeasure8},
                             {key:9, ingredient: drink.strIngredient9, measure: drink.strMeasure9},
                             {key:10, ingredient: drink.strIngredient10, measure: drink.strMeasure10},
                             {key:11, ingredient: drink.strIngredient11, measure: drink.strMeasure11},
                             {key:12, ingredient: drink.strIngredient12, measure: drink.strMeasure12},
                             {key:13, ingredient: drink.strIngredient13, measure: drink.strMeasure13},
                             {key:14, ingredient: drink.strIngredient14, measure: drink.strMeasure14},
                             {key:15, ingredient: drink.strIngredient15, measure: drink.strMeasure15}]
                  }
            }
      );

      returnArray.forEach(element => {
            element.ingredients = element.ingredients.filter( x => x.ingredient !== null)
      });

      return returnArray;
}

 
module.exports = {

  
      findRandom: function(req, res) {
        console.log('cocktail');
        axios
            .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            //.then(result => {console.log(result);res.j})
            .then (result => 
                  {console.log(result.data);
                  res.json(mapCocktail(result.data.drinks)[0])}
                  )
            .catch(err => res.status(422).json(err));
      }

};