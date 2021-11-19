import { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'
import styled from "styled-components";

function Dropdown({  select, setSelect}) {
    const [isActive, setIsActive] = useState(false);
    const [options, setOptions] = useState([])
    
    const history = useHistory()

    useEffect(() => {
        fetch('http://localhost:4000/currencies')
        .then(resp => resp.json())
        .then(data => {
            const newArray = [];
            data.map(currency => {
                return newArray.push([currency.name, currency.id])
            })
        setOptions(newArray)
    })
    }, [])
    console.log(isActive)
    return (
        <>
        <DropdownStyle>
            <div className={isActive ? "dropdown-active" : "dropdown"}>
                <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                    {select.toUpperCase()}
                    <span className="fas fa-caret-down"></span>
                </div>
                {isActive && (
                <div className="dropdown-content">
                    {options.map((option) => {
                        return <div onClick={() => {
                            setIsActive(false)
                            setSelect(option[1])
                            history.push('/currency')
                            }
                        } className="dropdown-item">{option[0]} ({option[1].toUpperCase()})</div>
                    })}
                

                </div>
                )}
            </div>
        </DropdownStyle>
        </>
    );

}

export default Dropdown

const DropdownStyle = styled.div`
    .dropdown-active {
        overflow-y: scroll;
        height: 200px;
        width: 30%;
        margin: auto;
        background: rgb(255, 255, 255);
        box-shadow: 3px 3px 10px 6px rgba(0,0,0,0.16);
    }
    .dropdown {
        width: 30%;
        margin: auto;
    }
      
    .dropdown .dropdown-btn {
    padding: 10px;
    background: rgb(255, 255, 255);
    box-shadow: 3px 3px 10px 6px rgba(0,0,0,0.16);
    }
    
    .dropdown .dropdown-content {
    padding: 10px;
    background: rgb(255, 255, 255);
    box-shadow: 3px 3px 10px 6px rgba(0,0,0,0.16);
    }
    
    .dropdown-item {
        padding: 5px;
        border-top: 1px solid black; 
    }

`