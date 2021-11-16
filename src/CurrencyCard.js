import React from 'react'

function CurrencyCard({currency, indivCurrency}) {
    return (
        <div className="currency-card">
            <p className="currency-name">{indivCurrency[0].toUpperCase()}</p>
            <p className="exchange-rate">Exchange Rate:</p>
            <p className="exchange-value">{indivCurrency[1].toPrecision(5)}</p>
        </div>
    )
}

export default CurrencyCard
