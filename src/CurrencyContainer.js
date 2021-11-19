
import React, {useState, useEffect} from 'react';
import CurrencyCard from './CurrencyCard';
import NotesForm from './NotesForm';
import FilterForm from './FilterForm';
import styled from 'styled-components';


function CurrencyContainer({ select, setSelect, currencyExchange, setCurrencyExchange}) {

    const [filter, setFilter] = useState('')
    const [LHFilter, setLHFilter] = useState(false)
    const [HLFilter, setHLFilter] = useState(false)
    
    const handleSearchFilter = (e) => {
        setFilter(e.target.value)
    }

    const handleLHFilter = (e) => {
        setLHFilter(LHFilter => !LHFilter)
        setHLFilter(HLFilter => {
            if (HLFilter === true) {
                return false
            }
        })
    }

    const handleHLFilter = (e) => {
        setHLFilter(HLFilter => !HLFilter)
        setLHFilter(LHFilter => {
            if (LHFilter === true) {
                return false
            }
        })
    }
    
    const evaluate = () => {

        if (currencyExchange !== '') {

            const spreadCurrency = {...currencyExchange}

            const exchangeList = () => {
                let array = []
                for (let i in spreadCurrency[select]) {
                    array.push([i, spreadCurrency[select][i]])
                }
                return array
            }
            
            let conversions = exchangeList()

            const filteredConversions = conversions.filter(conversion => {
                return conversion[0].toUpperCase().includes(filter.toUpperCase())
            })
    
            const LHfilteredConversions = conversions.sort((a, b) => {
                return a[1] - b[1]
            }).filter(conversion => {
                return conversion[0].toUpperCase().includes(filter.toUpperCase())
            })
    
            const HLfilteredConversions = conversions.sort((a, b) => {
                return b[1] - a[1]
            }).filter(conversion => {
                return conversion[0].toUpperCase().includes(filter.toUpperCase())
            })
            console.log(currencyExchange)
            const currencyRender = () => {
                console.log(select)
                if (LHFilter === true) {
                    return LHfilteredConversions.map(indivCurrency => {
                        return <CurrencyCard key={indivCurrency[0]} select={select} indivCurrency={indivCurrency} />
                    })
                } else if (HLFilter === true) {
                    return HLfilteredConversions.map(indivCurrency => {
                        return <CurrencyCard key={indivCurrency[0]} select={select} indivCurrency={indivCurrency} />
                    })
                } else {
                    return filteredConversions.map(indivCurrency => {
                        return <CurrencyCard key={indivCurrency[0]} select={select} indivCurrency={indivCurrency} />
                    })
                }
            }
            return currencyRender()    
    } else {
        return <p>Choose a Currency</p>
    }
    }

    return (
        <div>
            <Dropdown select={select} setSelect={setSelect} setCurrencyExchange={setCurrencyExchange} />

            <FormStyle>
                <FilterForm filter={filter} handleSearchFilter={handleSearchFilter} LHFilter={LHFilter} handleLHFilter={handleLHFilter} HLFilter={HLFilter} handleHLFilter={handleHLFilter}/>
            </FormStyle>
            <NotesForm select={select}/>
           <CardStyle style={{margin: 'auto', textAlign: 'center'}}>
                {evaluate()}
           </CardStyle>
        </div>
    )
}

export default CurrencyContainer

const CardStyle = styled.div`
    div:hover {
        animation-name: colorChange;
        animation-duration: 0.75s;
        animation-fill-mode: forwards;
    }
`

const FormStyle = styled.div`
    padding: 12px;
    margin: 30px auto;
    color: white;
    background-color: rgb(28, 27, 27);
    width: 50%;
    border-radius: 10px;
    text-align: center;
`