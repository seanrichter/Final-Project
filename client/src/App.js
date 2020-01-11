import React, { Component } from "react";
import AppNavbar from "./components/Nav/AppNavbar";
import ShoppingList from "./components/Lists/ShoppingList";
import ItemModal from "./components/Modals/ItemModal";
import { Provider } from "react-redux";
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
            <ItemModal />
            <ShoppingList />
            <CocktailCard />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;