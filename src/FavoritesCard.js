import React from 'react'
import styled from 'styled-components'

function FavoritesCard({ currency:{id, name, notes} }) {
    return (
        <Card>
            <p className="currency-name">{name}</p>
            <p className="currency-symbol">{id.toUpperCase()}</p>
            <p>User Notes:</p>
            <p className="currency-notes">{notes}</p> 
        </Card>
    )
}

export default FavoritesCard


const Card = styled.div`
    display: inline-block;
    padding: 10px;
    margin: 10px;
    text-align: center;
    background-color: darkgrey;
    border: 3px solid rgb(28, 27, 27);
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgb(28, 27, 27);
    width: 20%;
    animation-name: undoColorChange;
    animation-duration: 0.75s;

    @keyframes undoColorChange {
        from {background-color: #b742d4; transform: scale(1.05,1.05);}
        to {background-color: darkgrey;}
      }
      
    @keyframes colorChange {
        from {background-color: darkgrey;}
        to {background-color: #b742d4; transform: scale(1.05,1.05);}
      }

    .currency-name {
        font-size: 18px;
        font-weight: 700;
    }
    
    .currency-symbol {
        font-size: 30px;
    }
    
    .currency-notes {
        font-weight: 700;
        font-size: 15px;
    }
`
