import React from 'react'

import PredictionsAdapter from '../adapters/predictionsAdapter'
import PageHeader from './PageHeader'

export default class FixtureDetail extends React.Component {

	state = {
		fixture: {
			data: {
				away_team_id: "",
				competition_id: "",
				goals_away: 0,
				goals_home: 0,
				home_team_id: "",
				id: 0,
				match_date: "",
				match_day: "",
				status: ""
			},
			predictions: [],
			home_team: {},
			away_team: {},
			full_predictions: {}
		},
		isLoaded: false
	}


  componentDidMount = () => {
    const adapter = new PredictionsAdapter()
    adapter.getFixtureFromCompetition(this.props.fixture.match.params.fixture).then(json => this.setState({fixture: json, isLoaded: true }))
  }

	probabilityElements = () => {
		return this.state.fixture.predictions.map((prediction, index) => <div key={index}><h3>{prediction.home_goals}</h3><h2>{prediction.probability}</h2><h3>{prediction.away_goals}</h3></div>)
	}

	render() {
		return (
			<div>
			{this.state.isLoaded ?
				<div>
					<img src={this.state.fixture.home_team.crest_url} alt={this.state.fixture.home_team.name} />
					<img src={this.state.fixture.away_team.crest_url} alt={this.state.fixture.away_team.name} />
					{ this.probabilityElements() }
				</div>
			:	null }
			</div>
			)

	}
}

							// <td>{this.state.fixture.predictions.home_goals_0.toFixed(2)}</td>
							// <td>{this.state.fixture.predictions.home_goals_1.toFixed(2)}</td>
							// <td>{this.state.fixture.predictions.home_goals_2.toFixed(2)}</td>
							// <td>{this.state.fixture.predictions.home_goals_3.toFixed(2)}</td>
							// <td>{this.state.fixture.predictions.home_goals_4.toFixed(2)}</td>
							// <td>{this.state.fixture.predictions.home_goals_5.toFixed(2)}</td>