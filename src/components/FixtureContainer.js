import React from 'react'
import { Route } from 'react-router-dom'

import PredictionsAdapter from '../adapters/predictionsAdapter'
import PageHeader from './PageHeader'
import MatchDay from './MatchDay'

export default class FixtureContainer extends React.Component {

	state = {
		matchDays: [],
		loaded: true
	}


  componentDidMount = () => {
    const adapter = new PredictionsAdapter()
    adapter.getFixturesFromCompetition(this.props.competition.match.params.id).then(json => this.setState({matchDays: json, loaded: true }))
  }


	render() {
		const allMatchDays = this.state.matchDays.map( (day, index) => {
				
			return (
				<Route key={index} render={(location) => <MatchDay fixtures={day} location={location} />} />
			)
		})
		
		return (
			<div>
				<PageHeader competitionId={this.props.competition.match.params.id}/>
					{allMatchDays}
					{!this.state.loaded && <div style={{zIndex:'999', width: '100vw', height: '100vh', position: 'fixed', background: 'white', top: '0'}}></div>}
			</div>
			)

	}
}