import React from 'react'
import styled from 'styled-components'

function CurrencyCard({indivCurrency}) {
    return (
        <Card>
            <p className="currency-name">{indivCurrency[0].toUpperCase()}</p>
            <p className="exchange-rate">Exchange Rate:</p>
            <p className="exchange-value">{indivCurrency[1].toPrecision(5)}</p>
        </Card>
    )
}

export default CurrencyCard

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
        font-size: 30px;
        font-weight: 700;
    }
    
    .exhange-rate {
        font-style: italic;
        letter-spacing: 2px;
    }
    
    .exchange-value {
        font-weight: 700;
        font-size: 24px;
    }
`