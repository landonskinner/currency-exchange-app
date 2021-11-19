import React, {useEffect, useState} from "react";
import {Switch, Route} from 'react-router-dom';
import Header from "./Header";
import Search from "./Search";
import Home from "./Home";
import Landing from "./Landing"
import FavoritesContainer from "./FavoritesContainer";
import CurrencyContainer from "./CurrencyContainer";
import './App.css'
import Dropdown from './Dropdown';
import currencies from "./db.json";


function App() {
  
  const [currency, setCurrency] = useState('usd')
  // const currency = 'usd'

  
  // declaring dropdown value variable
    const [value, setValue] = useState(null)
  

  // currency variable used for testing -- eventually should reference value of currency selected from drop-down menu

  const [currencyExchange, setCurrencyExchange] = useState('')

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then(resp => resp.json())
    .then(data => {
      setCurrencyExchange(data)
    })
  }, [])

  console.log(currencyExchange)


  return (
    <div className="App">
       <Header />
       <Dropdown 
        options={currencies}
        prompt="Select Base Currency"
        value={value}
        onChange={val => setValue(val)}
        />
       <Search />
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/landing">
            <Landing />
          </Route>
          <Route path="/currency">           
            {!!currencyExchange ? <CurrencyContainer currency={currency} currencyExchange={currencyExchange} /> : null}
          </Route>
          <Route path="/favorites">
            <FavoritesContainer />
          </Route>
       </Switch>
    </div>
  );
}

export default App;