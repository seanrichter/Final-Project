import React, { Component } from "react";
import AppNavbar from "./components/Navbars/AppNavbar";
import ShoppingList from "./components//List Groups/ShoppingList";
import ItemModal from "./components/Modals/ItemModal";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RecipeCard from "./components/Cards/RecipeCard";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
            <RecipeCard />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
