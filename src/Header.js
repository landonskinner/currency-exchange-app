import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/currencies">Currencies</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
        </div>
    )
}

export default Header
