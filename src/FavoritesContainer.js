import React, { useState, useEffect } from 'react';
import FavoritesCard from './FavoritesCard'
import styled from 'styled-components';

function FavoritesContainer() {

    const [newNotes, setNewNotes] = useState('')

    useEffect(() => {
    fetch(`https://crypto-mock-server.herokuapp.com/currencies`)
    .then(resp => resp.json())
    .then(data => {
      setNewNotes(data)
    }) 
}, [])

    function displayFavs() {
        newNotes.map(currency => { 
            if (!currency['notes'] === false) return <FavoritesCard currency={currency} key={currency.id}/>
        })
    }


    if (newNotes === '') return <h1>Loading...</h1>

    return (
        <>
        <div style={{fontSize:"30px", textAlign:"center", padding: "10px"}}>Favorites List</div>
        <CardStyle>
            {displayFavs()}
        </CardStyle>
        </>
    )
}

export default FavoritesContainer


const CardStyle = styled.div`
    height: 600px;
    text-align: center;
    div:hover {
        animation-name: colorChange;
        animation-duration: 0.75s;
        animation-fill-mode: forwards;
    }
`
