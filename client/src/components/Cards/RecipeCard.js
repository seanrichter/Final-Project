import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardHeader,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
import API from "../../utils/API";
import "./Cards.css";

export default class RecipeCard extends Component {
  state = {
    recipe: {}
  };

  componentDidMount() {
    this.getRecipe();
  }

  getRecipe = () => {
    API.getRandomRecipe()
      .then(res => {
        this.setState({
          recipe: res.data,
          randomNumber: this.getRndInteger(0, res.data.length - 1)
        });
        console.log("the state is ", this.state);
      })
      .catch(err => console.log(err));
  };

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  render() {
    return this.state.recipe.length > 0 ? (
      <Card className="recipe">
        <CardImg
          top
          width="100%"
          src={this.state.recipe[this.state.randomNumber].image}
          alt="Card image cap"
        />
        <CardHeader>Here's a recipe!</CardHeader>{" "}
        <CardBody
          inverse="false"
          style={{ backgroundColor: "#dc3545", borderColor: "#dc3545" }}
        >
          <CardTitle>
            {this.state.recipe[this.state.randomNumber].name}
          </CardTitle>
          <CardText>
            Ingredients
            {this.state.recipe[this.state.randomNumber].ingredients.map(
              (ing, index) => (
                <li key={index}>{ing}</li>
              )
            )}
          </CardText>
          <CardText>
            Calories {this.state.recipe[this.state.randomNumber].calories}
          </CardText>
          <Button onClick={this.getRecipe}>Want a different recipe?</Button>
        </CardBody>
      </Card>
    ) : (
      <div>still loading...</div>
    );
  }
}
