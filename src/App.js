import React, {useEffect, useState} from "react";
import {Switch, Route} from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import Landing from "./Landing"
import FavoritesContainer from "./FavoritesContainer";
import CurrencyContainer from "./CurrencyContainer";
import './App.css'
import Footer from './Footer';

import Dropdown from "./Dropdown";
import styled from "styled-components";

function App() {
  
  const [select, setSelect] = useState("ada")


  const [currencyExchange, setCurrencyExchange] = useState('')


  useEffect(() => {
    if (select === "Select Base Currency") {
      return ''
    } else {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${select}.json`)
    .then(resp => resp.json())
    .then(data => {
      setCurrencyExchange(data)
    })
    }
  }, [select])

  return (
    <div className="App">
       <Header />
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/currency">         
            <CurrencyContainer  setCurrencyExchange={setCurrencyExchange} currencyExchange={currencyExchange} setSelect={setSelect} select={select} /> 
          </Route>
          <Route path="/landing">
            <HeaderStyle>
              <SelectStyle class="select">Select Your Currency:</SelectStyle>
              <Dropdown select={select} setSelect={setSelect} setCurrencyExchange={setCurrencyExchange}/>
            </HeaderStyle>
            <Landing />
          </Route>
          <Route path="/favorites">
            <FavoritesContainer />
          </Route>
       </Switch>
       <Footer />
    </div>
  );
}

export default App;

const SelectStyle = styled.div`
    font-size: 25px;
    text-align: center;
    padding: 10px;
`

const HeaderStyle = styled.div`
    background-color: grey;
    padding: 30px;
    height: 180px;
`