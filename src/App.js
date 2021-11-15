import React from "react";
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
       <Home />
       <FavoritesContainer />
       <CurrencyContainer />
    </div>
  );
}

export default App;
