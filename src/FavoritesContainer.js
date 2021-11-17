import React, { useState, useEffect } from 'react';
import FavoritesCard from './FavoritesCard'
import styled from 'styled-components';

function FavoritesContainer() {

    const [newNotes, setNewNotes] = useState('')

    useEffect(() => {
    fetch(`http://localhost:4000/currencies`)
    .then(resp => resp.json())
    .then(data => {
      setNewNotes(data)
    }) 
}, [])

    function displayFavs() {
        return newNotes.map(currency => { 
            if (!currency['notes'] === false) {
                return <FavoritesCard currency={currency} key={currency.id}/>
            }
        })
    }


    if (newNotes === '') return <h1>Loading...</h1>

    return (
        <CardStyle>
            {displayFavs()}
        </CardStyle>
    )
}

export default FavoritesContainer


const CardStyle = styled.div`
    div:hover {
        animation-name: colorChange;
        animation-duration: 0.75s;
        animation-fill-mode: forwards;
    }
`
