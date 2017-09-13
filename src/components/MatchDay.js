import React from 'react'
import { Route } from 'react-router-dom'
import FixtureItem from './FixtureItem'

export default class MatchDay extends React.Component {

	state = {
		fixtures: this.props.fixtures,
	}

	render() {
		const scoreBoxes = this.state.fixtures.map((fixture, index)=> <Route key={index} path={'/competitions/:id/fixtures'} render={(location) => <FixtureItem location={location} fixture={fixture} key={index} />} />)
		return (
		<div>
			<div className="divider"><hr /><h3>{new Date(this.state.fixtures[0].data.match_date).toISOString().substring(0, 10)}</h3></div>
			<div className="scores-wrapper">
				{ scoreBoxes }
			</div>
		</div>
		)
	}
}