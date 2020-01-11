import React, { Component } from "react";
import { Provider } from "react-redux";
import AppNavbar from "./components/Nav/AppNavbar";
import { Container } from "reactstrap";
import CocktailCard from "./components/Cards/CocktailCard";
import MovieCard from "./components/Cards/MovieCard";
import RecipeCard from "./components/Cards/RecipeCard"
import store from "./store";
import { loadUser } from "./actions/authActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <AppNavbar />
          <Container>
            <CocktailCard />
            <MovieCard />
            <RecipeCard />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;