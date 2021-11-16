import React, {useState} from 'react';
import CurrencyCard from './CurrencyCard';
import NotesForm from './NotesForm';
import FilterForm from './FilterForm';

function CurrencyContainer({currency, currencyExchange}) {
    
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
    const conversions = Object.entries(currencyExchange[currency])

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
 
    const currencyRender = () => {
        if (LHFilter === true) {
            return LHfilteredConversions.map(indivCurrency => {
                return <CurrencyCard key={indivCurrency[0]} currency={currency} indivCurrency={indivCurrency} />
            })
        } else if (HLFilter === true) {
            return HLfilteredConversions.map(indivCurrency => {
                return <CurrencyCard key={indivCurrency[0]} currency={currency} indivCurrency={indivCurrency} />
            })
        } else {
            return filteredConversions.map(indivCurrency => {
                return <CurrencyCard key={indivCurrency[0]} currency={currency} indivCurrency={indivCurrency} />
            })
        }
    }

    return (
        <div>
            <NotesForm />
            <FilterForm filter={filter} handleSearchFilter={handleSearchFilter} LHFilter={LHFilter} handleLHFilter={handleLHFilter} HLFilter={HLFilter} handleHLFilter={handleHLFilter}/>
           <div className="currency-container">
                {currencyRender()}
           </div>
        </div>
    )
}

export default CurrencyContainer
