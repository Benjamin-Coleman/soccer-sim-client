import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
	return (
		<div className="nav-bar">
			<NavLink exact to='/competitions' activeClassName="active">Leagues</NavLink>
			<NavLink to='/teams' activeClassName="active">Teams</NavLink>
			<NavLink to='/competitions/445/fixtures' activeClassName="active">Other Nav Stuff</NavLink>
		</div>
		)
}

export default NavBar