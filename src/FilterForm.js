import React from 'react';
import styled from 'styled-components'


function FilterForm({filter, handleSearchFilter, LHFilter, handleLHFilter, HLFilter, handleHLFilter}) {


    return (
        <Form>
            <h1>Narrow Your Search!</h1>
            <form id="currency-search">
                <label htmlFor="filter">Search for a currency to compare:</label><br/>
                <input type="text" id="filter" value={filter} placeholder="e.g. BTC, USD, EUR, etc." onChange={(e) => handleSearchFilter(e)}></input>
            </form>
            <form id="currency-filter">
                <input type="checkbox" id="LHFilter" checked={LHFilter} onChange={(e) => handleLHFilter(e)}></input>
                <label htmlFor="LHFilter">Filter Currencies by Exchange Rate (Low to High)</label><br/>
                <input type="checkbox" id="HLFilter" checked={HLFilter} onChange={(e) => handleHLFilter(e)}></input>
                <label htmlFor="HLFilter">Filter Currencies by Exchange Rate (High to Low)</label>
            </form>
        </Form>
    )
}

export default FilterForm

const Form = styled.div`
    #currency-search {
        padding: 5px;
        margin: 5px;
    }
    
    #filter {
        width: 60%;
        height: 30px;
    }
    
    label {
        padding: 10px;
        line-height: 20px;
    }
`