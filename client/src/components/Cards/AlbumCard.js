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

export default class AlbumCard extends Component {
  state = {
    album: {}
  };

  componentDidMount() {
    this.getAlbum();
  }

  getAlbum = () => {
    //   console.log("getting album")
    API.getRandomAlbum()
      .then(res => {
        this.setState({
          album: res.data,
          randomAlbum: this.getRndInteger(0, res.data.length - 1)
        });
        console.log("the album is ", this.state);
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
    //   return console.log("hello album")
    return this.state.album.length > 0 ? (
      <Card className="album">
        <CardImg
          top
          width="100%"
          height="100%"
          src={this.state.albums.album.image}
          alt="Card image cap"
        />
        <CardHeader>Here's a album!</CardHeader>{" "}
        <CardBody
          inverse="false"
          style={{ backgroundColor: "#dc3545", borderColor: "#dc3545" }}
        >
          <CardTitle>
            Album Name
            {this.state.album.name}
            
          </CardTitle>
          <CardText>
            Artist Name
            {this.state.album.artist.name}
          </CardText>
          <CardText>
            LastFM URL {this.state.album.artist.url}
          </CardText>
          <Button onClick={this.getAlbum}>Want a different album?</Button>
        </CardBody>
      </Card>
    ) : (
      <div>still loading...</div>
    );
  }
}
