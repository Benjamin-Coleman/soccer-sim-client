import React from 'react'
import { Route } from 'react-router-dom'
import FixtureItem from './FixtureItem'

export default class CompetitionGroup extends React.Component {

	state = {
		fixturesData: this.props.fixtures,
	}

	componentWillReceiveProps = (nextProps) => {
		this.setState({fixturesData: nextProps.fixtures})
	} 

	scoreBoxes = () => {
		let scoreBoxes = this.state.fixturesData.map((fixture, index)=> {
			return <FixtureItem fixture={fixture} key={fixture.data.id} />
		})
		return scoreBoxes
	}

	render() {
		return (
		<div>
			<div className="divider"><hr /><h3>{this.state.fixturesData[0].competition.name}</h3></div>
			<div className="scores-wrapper">
				{ this.scoreBoxes() }
			</div>
		</div>
		)
	}
}