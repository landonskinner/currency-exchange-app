import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import LandingFeatureCard from './LandingFeatureCard'

function LandingCardContainer() {

    const [valuesArray, setValuesArray] = useState('')
    
    useEffect(() => {
        const createFeaturedExchanges = (arr) => {
            const featuredExchanges = []
            arr.map(exchange => {
                return fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${exchange[0]}/${exchange[1]}.json`)
                .then(resp => resp.json())
                .then(data => {
                    featuredExchanges.push([data[exchange[1]], exchange[0], exchange[1]])
                    exportExchanges(featuredExchanges)
                })
            }) 
        }
    
        const exportExchanges = (arr) => {
            if (arr.length === 5) {
                renderExchanges(arr)
            }
        }
    
        function renderExchanges(arr) {
            const renderFeaturedExchanges = arr.map(exchange => <LandingFeatureCard exchange={exchange} key={exchange}/>)
            setValuesArray(renderFeaturedExchanges)
        }
        
        const exchangevaluesArray = [['usd','btc'],['eur','jpy'],['etc','ada'], ['xrp','cad'],['nzd','uah']]

        createFeaturedExchanges(exchangevaluesArray)
    }, [])

    return (
        <Featured>
            <h2>Featured Exchanges:</h2>
            <CardStyle>
                {valuesArray}
            </CardStyle>
        </Featured>
    )
}

export default LandingCardContainer

const Featured = styled.div`
    text-align: center;
    padding: 60px;
    height: 400px;
    h2 {
        padding: 5px;
        margin: 30px auto;
        color: white;
        background-color: rgb(28, 27, 27);
        width: 30%;
        border-radius: 10px;
    }
`

const CardStyle = styled.div`
    div:hover {
        animation-name: colorChange;
        animation-duration: 0.75s;
        animation-fill-mode: forwards;
    }
`
