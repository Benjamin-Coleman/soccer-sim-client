import React from 'react'
import { TweenMax } from 'gsap'
import PredictionsAdapter from '../adapters/predictionsAdapter'

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
    adapter.getFixtureFromCompetition(this.props.fixture.match.params.fixture).then(json => this.setState({fixture: json, isLoaded: true }, this.animate))
  }

  animate = () => {
  	const left = this.refs.probabilityWrapper.querySelectorAll('.probability-goals.home')
  	const right = this.refs.probabilityWrapper.querySelectorAll('.probability-goals.away')
	TweenMax.fromTo(this.refs.homeTeamImage, .6, {y: 60}, {y: 0, ease: "Expo"})
	TweenMax.fromTo(this.refs.awayTeamImage, .6, {y: 60}, {y: 0, ease: "Expo"})
	TweenMax.staggerFromTo(left, 1, {x: 107}, {x: 0, ease: 'Expo'}, .2)
	TweenMax.staggerFromTo(right, 1, {x: -107}, {x: 0, ease: 'Expo'}, .2)
  }

	probabilityElements = () => {
		return this.state.fixture.predictions.map((prediction, index) => {
			return (
				<div key={index} className="probability-row">
					<div className={prediction.home_goals > prediction.away_goals ? "probability-goals home winner" : "probability-goals home"} ><h3>{prediction.home_goals}</h3></div>
					<div className="probability-percentage"><h2>{(prediction.probability * 100).toFixed(2) + '%'}</h2></div>
					<div className={prediction.away_goals > prediction.home_goals ? "probability-goals away winner" : "probability-goals away"}><h3>{prediction.away_goals}</h3></div>
				</div>
				)
			}
		)
	}

	render() {
		return (
			<div>
			{this.state.isLoaded ?
				<div>
					<div className="top-banner">
						<div ref="homeTeamImage" className="team-image home">
							<img src={this.state.fixture.home_team.crest_url} alt={this.state.fixture.home_team.name} />
						</div>
						<div className="fixture-details-headline">
							<h3>{this.state.fixture.home_team.name} <br /> vs. <br />{this.state.fixture.away_team.name}</h3>
							<p>{new Date(this.state.fixture.data.match_date).toISOString().substring(0, 10)}</p>
						</div>
						<div ref="awayTeamImage" className="team-image away">
							<img src={this.state.fixture.away_team.crest_url} alt={this.state.fixture.away_team.name} />
						</div>
					</div>
					{ this.state.fixture.data.status === "FINISHED" && 
					<div className="finished-game">
						<h2>Final</h2>
						<div className="finished-game-row">
							<div className="home-final-score">{this.state.fixture.data.goals_home}</div>
							<div className="away-final-score">{this.state.fixture.data.goals_away}</div>
						</div>
					</div>
					}
					{ this.state.fixture.predictions.length > 0 && (
						<div>
					<div ref="probabilityWrapper" className="probability-wrapper">
						<h2>Predicted Outcomes</h2>
						{ this.probabilityElements() }
					</div>
					<div className="full-results">
						<h2>Full Predictions</h2>
						<table>
							<tbody>
								<tr>
									<th></th>
									<th>0</th>
									<th>1</th>
									<th>2</th>
									<th>3</th>
									<th>4</th>
									<th>5</th>
								</tr>
								<tr>
									<td>{this.state.fixture.home_team.name}</td>
									<td>{(this.state.fixture.full_predictions.home_goals_0 * 100).toFixed(2) + '%'}</td>
									<td>{(this.state.fixture.full_predictions.home_goals_1 * 100).toFixed(2) + '%'}</td>
									<td>{(this.state.fixture.full_predictions.home_goals_2 * 100).toFixed(2) + '%'}</td>
									<td>{(this.state.fixture.full_predictions.home_goals_3 * 100).toFixed(2) + '%'}</td>
									<td>{(this.state.fixture.full_predictions.home_goals_4 * 100).toFixed(2) + '%'}</td>
									<td>{(this.state.fixture.full_predictions.home_goals_5 * 100).toFixed(2) + '%'}</td>
								</tr>
								<tr>
									<td>{this.state.fixture.away_team.name}</td>
									<td>{(this.state.fixture.full_predictions.away_goals_0 * 100).toFixed(2) + '%'}</td>
									<td>{(this.state.fixture.full_predictions.away_goals_1 * 100).toFixed(2) + '%'}</td>
									<td>{(this.state.fixture.full_predictions.away_goals_2 * 100).toFixed(2) + '%'}</td>
									<td>{(this.state.fixture.full_predictions.away_goals_3 * 100).toFixed(2) + '%'}</td>
									<td>{(this.state.fixture.full_predictions.away_goals_4 * 100).toFixed(2) + '%'}</td>
									<td>{(this.state.fixture.full_predictions.away_goals_5 * 100).toFixed(2) + '%'}</td>
								</tr>
							</tbody>
						</table>
					</div>
					</div>
				)}
				</div>
			:	null }
			</div>
			)

	}
}