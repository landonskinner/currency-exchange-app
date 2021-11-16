import React from "react";
import {Switch, Route} from 'react-router-dom';
import Header from "./Header";
import Search from "./Search";
import Home from "./Home";
import FavoritesContainer from "./FavoritesContainer";
import CurrencyContainer from "./CurrencyContainer";
import './App.css'


function App() {
  return (
    <div className="App">
       <Header />
       <Search />
       <Switch>
         <Route exact path="/">
            <Home />
         </Route>
         <Route path="/currency">
            <CurrencyContainer />
         </Route>
         <Route path="/favorites">
            <FavoritesContainer />
         </Route>
       </Switch>
    </div>
  );
}

export default App;
