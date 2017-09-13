import React from 'react'
import { Link } from 'react-router-dom'

export default class FixtureItem extends React.Component  {

	state = {
		fixture: this.props.fixture,
	}

	componentWillReceiveProps = (nextProps) => {
		this.setState({fixture: nextProps.fixture})
	}

	render() {
		return (
			<div className="score-box">
			<Link to={"/competitions/" + this.state.fixture.data.competition_id + '/fixtures/' + this.state.fixture.data.id} >
					<div className="score">
						<div className={this.state.fixture.data.status === "FINISHED" ? "score-box-container finished" : "score-box-container"}>
							<div className="score-content">
								<div className="team-names">
									<div className="team-name">
										<span><img src={this.state.fixture.home_team.crest_url} width="32px" alt={this.state.fixture.home_team.name}/>{this.state.fixture.home_team.name}</span>
									</div>
									<div className="team-name">
										<span><img src={this.state.fixture.away_team.crest_url} width="32px" alt={this.state.fixture.away_team.name}/>{this.state.fixture.away_team.name}</span>
									</div>
								</div>
								<div className="team-scores">
									<div className={this.state.fixture.data.goals_home > this.state.fixture.data.goals_away ? "team-score winner" : "team-score"}>
										<span>{this.state.fixture.data.goals_home}</span>
									</div>									
									<div className={this.state.fixture.data.goals_away > this.state.fixture.data.goals_home ? "team-score winner" : "team-score"}>
										<span>{this.state.fixture.data.goals_away}</span>
									</div>
								</div>
								<div className="game-info">
									<span className="time">{this.state.fixture.data.status === "FINISHED" ? "FT" : "SIM"}</span>
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