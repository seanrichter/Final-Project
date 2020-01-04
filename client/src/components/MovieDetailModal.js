import React, { Component } from "react";
import { ListGroup,Modal,Button} from "react-bootstrap";
import CocktailCard from "./CocktailCard";
import API from "../utils/API";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; 

export default class MovieDetailModal extends Component{

    state = {
       show:false,
       cocktail:{}
    };

    handleClose = () => {this.setState({show:false})}
    handleShow = () => {this.setState({show:true})}

    componentDidMount(){
        

        API.getRandomCocktail()
             .then(res => 
                 {
                     this.setState({cocktail:res.data});
                     console.log(this.state);
                 }

             )
             .catch(err => console.log(err));
    
          
    }
    
    deleteEntry = event => {
        event.preventDefault();
        const filmTitle = this.props.movie.title;
        confirmAlert({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete ' + filmTitle + '?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => this.props.deleteFunction(this.props.movie._id)
              },
              {
                label: 'No',
                onClick: () => {}
              }
            ]
          });
    
       // this.props.deleteFunction(this.props.movie._id);
    }


    render()
    {
        return(
                <React.Fragment>
                <ListGroup.Item key={this.props.movie._id}>{this.props.movie.title}
                <span style={{float:"right"}}>
                    <Button variant="outline-primary" size="sm"  onClick={this.handleShow}>Detail</Button>&nbsp;&nbsp;
                    <Button variant="outline-danger" size="sm"  onClick={this.deleteEntry} > Delete</Button></span></ListGroup.Item>
                     
                  
                  <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>{this.props.movie.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <div>
                            <p>
                          <img src={this.props.movie.imageUrl} alt={this.props.movie.title} style={{float:"left",width:125,marginRight:5}} />
                           {this.props.movie.synopsis}
                           </p>
                        </div>
                        <div>
                            <p>
                            Directed by: {this.props.movie.director}<br/>
                            Released: {this.props.movie.year}
                            </p>
                        </div>
                                                
                        <CocktailCard/>
                           
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    </React.Fragment>
                
    
        )
        
    } 
}