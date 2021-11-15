import React from "react";
import {Switch, Route} from 'react-router-dom';
import Header from "./Header";
import Search from "./Search";
import Home from "./Home";
import FavoritesContainer from "./FavoritesContainer";
import CurrencyContainer from "./CurrencyContainer";

function App() {
  return (
    <div className="App">
       <Header />
       <Search />
       <Switch>
         <Route exact to="/">
            <Home />
         </Route>
         <Route to="/currency">
            <CurrencyContainer />
         </Route>
         <Route to="/favorites">
            <FavoritesContainer />
         </Route>
       </Switch>
    </div>
  );
}

export default App;
