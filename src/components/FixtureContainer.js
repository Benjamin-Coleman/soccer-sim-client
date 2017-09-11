import React from 'react'
import { Route } from 'react-router-dom'

import PredictionsAdapter from '../adapters/predictionsAdapter'
import FixtureItem from './FixtureItem'
import PageHeader from './PageHeader'
import MatchDay from './MatchDay'

export default class FixtureContainer extends React.Component {

	state = {
		matchDays: []
	}


  componentDidMount = () => {
    const adapter = new PredictionsAdapter()
    adapter.getFixturesFromCompetition(this.props.competition.match.params.id).then(json => this.setState({matchDays: json }))
  }


	render() {
		let currentDay = 0
		let divider = (<div></div>)
		const allMatchDays = this.state.matchDays.map( (day, index) => {
				
			return (
				<Route key={index} render={(location) => <MatchDay fixtures={day} location={location} />} />
			)
		})
		return (
			<div>
				<PageHeader competitionId={this.props.competition.match.params.id}/>
					{allMatchDays}
			</div>
			)

	}
}