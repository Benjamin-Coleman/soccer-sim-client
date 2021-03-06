import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import Search from './Search'


const Header = () => {
	return (
		<div className="header">
			<div className="logo">
				<Link to="/"><h2>SoccerSim</h2></Link>
			</div>
	        <Search />
			<NavBar />
		</div>
		)
}

export default Header