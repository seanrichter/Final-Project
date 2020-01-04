import React, { Component } from "react";
import { Card} from "react-bootstrap";
import API from "../utils/API";


export default class CocktailCard extends Component{

    state = {

       cocktail:{}
    };



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
    
   


    render()
    {
        return(

            this.state.cocktail.name ?
            (<Card bg="info" text="white" style={{ width: '28rem' }}>
                <Card.Header>Enjoy with one of these!</Card.Header>
                <Card.Body>
                <Card.Title>{this.state.cocktail.name}</Card.Title>
                <Card.Text>
                    Glass:  {this.state.cocktail.glass}<br/>
                </Card.Text>
                
                <div>Ingredients:</div>
                <ul>
                     {this.state.cocktail.ingredients.map(ing => (
                        <li key={ing.key}>
                        {ing.ingredient} - {(ing.measure?ing.measure:"")}
                        </li>
                     ))}
                </ul>
                
                <Card.Text>{this.state.cocktail.instructions}</Card.Text>
                   
                    </Card.Body>
                    </Card>)
                    :
                    (<div>still loading...</div>)
            

    
        )
        
    } 
}