import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
	return (
		<div className="nav-bar">
			<NavLink exact to='/competitions' activeClassName="active">Leagues</NavLink>
		</div>
		)
}

export default NavBar