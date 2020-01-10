import React, { Component } from "react";
import { Card } from "react-bootstrap";
import API from "../../utils/API";

export default class RecipeCard extends Component {
  state = {
    recipe: {}
  };

  componentDidMount() {
    API.getRandomRecipe()
      .then(res => {
        this.setState({ recipe: res.data });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  }

  render() {
    return this.state.recipe.title ? (
      <Card bg="info" text="white" style={{ width: "28rem" }}>
        <Card.Header>Recipe!</Card.Header>
        <Card.Body>
          <Card.Title>{this.state.recipe.recipe.title}</Card.Title>
          <Card.Text>
            Calories: {this.state.recipe.recipe.calories}
            <br />
          </Card.Text>

          <div>Ingredients:</div>
          <ul>
            {this.state.recipe.recipe.ingredients.map(ing => (
              <li key={ing.key}>
                {ing.ingredient} - {ing.measure ? ing.measure : ""}
              </li>
            ))}
          </ul>

          <Card.Text>{this.state.recipe.recipe.ingredients}</Card.Text>
        </Card.Body>
      </Card>
    ) : (
      <div>still loading...</div>
    );
  }
}
