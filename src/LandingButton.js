import React from 'react'

function LandingButton({currency}) {
    console.log(currency)
    return (
        <div>
            {currency[0]}
            {currency[1]}
        </div>
    )
}

export default LandingButton
