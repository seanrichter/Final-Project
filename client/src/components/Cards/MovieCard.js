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

export default class MovieCard extends Component {
  state = {
    movie: {}
  };

  componentDidMount() {
    this.getMovie();
  }

  getMovie = () => {
    // console.log("getting movie")
    API.getRandomMovie()
      .then(res => {
        this.setState({
          movie: res.data,
          randomMovie: this.getRndInteger(0, res.data.length - 1)
        });
        console.log("the movie is ", this.state);
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
    return this.state.movie.length > 0 ? (
      <Card className="movie">
        <CardImg
          top
          width="100%"
          src={this.state.movie[this.state.randomMovie].image}
          alt="Card image cap"
        />
        <CardHeader>Here's a Movie!</CardHeader>{" "}
        <CardBody
          inverse="false"
          style={{ backgroundColor: "#dc3545", borderColor: "#dc3545" }}
        >
          <CardTitle>{this.state.movie[this.state.randomMovie].title}</CardTitle>
          <CardText>
          Overview
          <br></br>
          <br></br>
            {this.state.movie[this.state.randomMovie].overview}
          </CardText>

          <Button onClick={this.getMovie}>Want a different Movie?</Button>
        </CardBody>
      </Card>
    ) : (
      <div>still loading...</div>
    );
  }
}
