import React from 'react'
import { Link } from 'react-router-dom'
import TeamsAdapter from '../adapters/teamsAdapter'

export default class FixtureItem extends React.Component  {

	state = {
		homeTeamData: {},
		awayTeamData: {},
	}

	componentDidMount = () => {
		const adapter = new TeamsAdapter()
	    adapter.getTeamData(this.props.data.home_team_id).then(json => this.setState({homeTeamData: json }))
	    adapter.getTeamData(this.props.data.away_team_id).then(json => this.setState({awayTeamData: json }))
	}	
	
	render() {
		return (
			<div className="score-box">
			<Link to={"/competitions/" + this.props.data.competition_id + '/fixtures/' + this.props.data.id} >
					<div className="score">
						<div className={this.props.data.status === "FINISHED" ? "score-box-container finished" : "score-box-container"}>
							<div className="score-content">
								<div className="team-names">
									<div className="team-name">
										<span><img src={this.state.homeTeamData.crest_url} width="32px" alt={this.state.homeTeamData.name}/>{this.state.homeTeamData.name}</span>
									</div>
									<div className="team-name">
										<span><img src={this.state.awayTeamData.crest_url} width="32px" alt={this.state.homeTeamData.name}/>{this.state.awayTeamData.name}</span>
									</div>
								</div>
								<div className="team-scores">
									<div className={this.props.data.goals_home > this.props.data.goals_away ? "team-score winner" : "team-score"}>
										<span>{this.props.data.goals_home}</span>
									</div>									
									<div className={this.props.data.goals_away > this.props.data.goals_home ? "team-score winner" : "team-score"}>
										<span>{this.props.data.goals_away}</span>
									</div>
								</div>
								<div className="game-info">
									<span className="time">{this.props.data.status === "FINISHED" ? "FT" : "SIM"}</span>
								</div>
							</div>
						</div>
					</div>
			</Link>	
			</div>
		)
	}
}


			// <li className={this.props.data.status !== "FINISHED" ? "fixture-row-predicted" : "fixture-row"}>
			// 	<span style={{display: 'inline-block', verticalAlign: 'top', width: '50%', minWidth: '75px', color: '#121212'}}>
			// 		<span className="fixture-list-team home">
			// 			<span className="fixture-list-team-wrap">
			// 				<span className="fixture-list-team-name">{this.state.homeTeamData.name}</span>
			// 			</span>
			// 				<span>{this.props.data.goals_home}</span>
			// 		</span>
			// 	</span>
			// 	<span style={{display: 'inline-block', verticalAlign: 'top', width: '50%', minWidth: '75px', color: '#121212'}}>
			// 		<span style={{textAlign: 'left'}}>{this.state.awayTeamData.name}</span>
			// 		<span>{this.props.data.goals_away}</span>
			// 	</span>
			// </li>