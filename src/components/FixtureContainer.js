import React from 'react'

import PredictionsAdapter from '../adapters/predictionsAdapter'
import FixtureItem from './FixtureItem'
import PageHeader from './PageHeader'

export default class FixtureContainer extends React.Component {

	state = {
		fixtures: []
	}


  componentDidMount = () => {
    const adapter = new PredictionsAdapter()
    adapter.getFixturesFromCompetition(this.props.competition.match.params.id).then(json => this.setState({fixtures: json }))
  }


	render() {
		const allFixtures = this.state.fixtures.map( (fixture, index) => <FixtureItem data={fixture} key={index} />)
		return (
			<div>
				<PageHeader competitionId={this.props.competition.match.params.id}/>
				<div className="scores-wrapper">
					{allFixtures}
				</div>
			</div>
			)

	}
}