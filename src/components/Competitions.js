import React from 'react'
import { Link } from 'react-router-dom'
import CompetitionsAdapter from '../adapters/competitionsAdapter'

export default class Competition extends React.Component {
	state = {
		competitions: []
	}

	componentDidMount() {
    const adapter = new CompetitionsAdapter()
    adapter.getCompetitions().then(json => this.setState({competitions: json }))
	}

	render() {
		console.log(this.state)
		const competitions = this.state.competitions.map((league, index)=> <Link key={index}to={'/competitions/' + league.id + '/fixtures'} ><h2>{league.caption}</h2></Link>)
		return (
			<div className="all-competitions-wrapper">
				{competitions}
			</div>
			)
	}

}