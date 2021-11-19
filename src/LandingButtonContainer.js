import React, {useState, useEffect} from 'react'
import LandingButton from './LandingButton'

function LandingButtonContainer() {
    
    const [list, setList] = useState([])


    useEffect(() => {
        fetch('http://localhost:4000/currencies')
        .then(resp => resp.json())
        .then(data => {
            const newArray = [];
            data.map(currency => {
                return newArray.push([currency.name, currency.symbol])
            })
        setList(newArray)
    })
    }, [])
    console.log(list)
    return (
        <div>
            {list.map(currency => {
                return <LandingButton currency={currency} id={currency}/>
            })}
        </div>
    )
}

export default LandingButtonContainer
