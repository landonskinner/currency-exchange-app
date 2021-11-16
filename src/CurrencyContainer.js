import React, {useEffect} from 'react';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownItem from 'react-bootstrap/DropdownItem'
import CurrencyCard from './CurrencyCard';
import NotesForm from './NotesForm';

function CurrencyContainer({currency, currencyExchange}) {
    


    const conversions = Object.entries(currencyExchange[currency])
    
    const currencyRender = conversions.map(indivCurrency => {
        return <CurrencyCard key={indivCurrency[0]} currency={currency} indivCurrency={indivCurrency} />
    })
    
    return (
        <div>
            <NotesForm />
           {currencyRender}
        </div>
    )
}

export default CurrencyContainer
