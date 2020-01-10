import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";

import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal";
import { Provider } from "react-redux";
import { Container } from "reactstrap";
import CocktailCard from "./components/CocktailCard";
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

/* import React from "react";
import MovieForm from "./MovieForm";
import Nav from "./Nav";

function App() {
  return (
    <div>
      <Nav />
      <MovieForm />
    </div>
  );
}

export default App;
 */

export default App;