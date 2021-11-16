import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/currency">Currency</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
        </div>
    )
}

export default Header
