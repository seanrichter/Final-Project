import React, { Component } from "react";
import { Provider } from "react-redux";
import AppNavbar from "./components/Nav/AppNavbar";
import { Container } from "reactstrap";
import CocktailCard from "./components/Cards/CocktailCard";
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
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;