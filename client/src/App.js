import React, { Component } from "react";
import { Provider } from "react-redux";
import AppNavbar from "./components/Nav/AppNavbar";
import { Container, Row, Col } from "reactstrap";
import CocktailCard from "./components/Cards/CocktailCard";
import RecipeCard from "./components/Cards/RecipeCard";
import store from "./store";
import { loadUser } from "./actions/authActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";



class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  };

  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <AppNavbar />
          <Container>
            <Row>
            <Col><CocktailCard /></Col>
            <Col><RecipeCard /></Col>
            </Row>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;