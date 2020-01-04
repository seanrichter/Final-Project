import React, { Component } from "react";
import {Form, Button,Col, Row,Card,  ListGroup, Container} from "react-bootstrap";
import MovieDetailModal from "./MovieDetailModal";
import API from "../utils/API";

export default class MovieForm extends Component{

    state = {
        title: "",
        director:"",
        year: "",
        imageUrl: "",
        synopsis: "",
        movies:[]
    };

    componentDidMount(){

          this.loadMovies();
    }
    

    loadMovies =  () => {
        API.getMovies().then(
            res => {
                this.setState(
                    
                    {
                    movies: res.data, 
                    title:"", 
                    director:"", 
                    year:"", 
                    imageUrl:"", 
                    synopsis:""});
                console.log("the state is", this.state.movies);
            }
            ).catch(
                err => console.log(err)
            )
    }
    
    handleFormSubmit = event =>{
        event.preventDefault();

        API.saveMovie({
            title: this.state.title,
            director: this.state.director,
            year: this.state.year,
            imageUrl: this.state.imageUrl,
            synopsis: this.state.synopsis
          })
            .then((res) => {console.log(res.data);this.loadMovies()})
            .catch(err => console.log(err));

    }

    handleInputChange = event => {
     
           
            const {name, value} = event.target;

            this.setState(
                {
                    [name]:value
                }
            );


          console.log(this.state);

    }

    deleteMovie = id => {
      console.log(id);
      API.deleteMovie(id)
       .then(res => this.loadMovies())
       .catch(err => console.log(err));
    };

    render()
    {
        return(
        <div style={{marginTop:10}}>
        <Container>
            <Row className="justify-content-md-center">
            <Col>
            
            <Form>

            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control name="title" type="text" value={this.state.title} onChange={this.handleInputChange} placeholder="Enter the film title" isValid={this.state.title.length}></Form.Control>
              <Form.Control.Feedback>Great choice!</Form.Control.Feedback>
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          
            <Form.Group controlId="formDirector">
              <Form.Label>Director</Form.Label>
              <Form.Control name="director" type="text" value={this.state.director} onChange={this.handleInputChange} placeholder="Enter the film director" isValid={this.state.director.length}/>
              <Form.Control.Feedback>That director is awesome!</Form.Control.Feedback>
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formYear">
              <Form.Label>Year</Form.Label>
              <Form.Control name="year" type="number" value={this.state.year} onChange={this.handleInputChange} placeholder="Enter the year of the film's release" isValid={((parseInt(this.state.year) + '').length===4)} isInvalid={!((parseInt(this.state.year) + '').length===4)}/>
              <Form.Control.Feedback type="valid">Great year!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Must be a 4 digit year.</Form.Control.Feedback>
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>



            <Form.Group controlId="formImage">
              <Form.Label>Image</Form.Label>
              <Form.Control name="imageUrl" type="text" value={this.state.imageUrl} onChange={this.handleInputChange} placeholder="Enter a url of an image from this film" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formSynopsis">
                <Form.Label>Synopsis</Form.Label>
                <Form.Control name="synopsis" value={this.state.synopsis} onChange={this.handleInputChange} as="textarea" rows="3" />
                <Form.Text className="text-muted">
                    Enter an overview of the film.
                </Form.Text>
           </Form.Group>


            <Button disabled = {!(this.state.director && this.state.title)} variant="primary" type="submit" onClick={this.handleFormSubmit}>
              Submit
            </Button>
          </Form>
          </Col>
          <Col>   
          {
            this.state.movies.length ?   
            (

                <Card style={{ width: '20rem' }}>
                    <Card.Header>My Movie List</Card.Header>
                    <ListGroup variant="flush">
                    {
                        this.state.movies.map(movie =>            
                        (
                         <MovieDetailModal key={movie._id} movie={movie} deleteFunction={this.deleteMovie}/>
                        )
                        )      
                    }
                    </ListGroup>
                </Card>
            )
            :
            (
                <span>No movies yet: Use the form to add some.</span>
            )
            }
          </Col>
          </Row>
          </Container>
          </div>
        )
    }

} 