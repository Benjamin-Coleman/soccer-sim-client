import React from 'react'
import TeamsAdapter from '../adapters/teamsAdapter'
import PredictionsAdapter from '../adapters/predictionsAdapter'
import CompetitionGroup from './CompetitionGroup'

export default class Team extends React.Component {

	state = {
		teamData: {},
		fixturesData: [],
		currentTeam: ''
	}

	fetchTeamData = () => {
		const teamsAdapter = new TeamsAdapter()
		const predictionsAdapter = new PredictionsAdapter()
	    teamsAdapter.getTeamData(this.state.currentTeam).then(json => this.setState({teamData: json }))
	    predictionsAdapter.getFixturesFromTeam(this.state.currentTeam).then(json => this.setState({fixturesData: json }))
	}	

	componentDidMount = () => {
		this.setState({ currentTeam: this.props.team.match.params.id }, this.fetchTeamData)
	}

	componentWillReceiveProps = (nextProps) => {
		this.setState({ currentTeam: nextProps.team.match.params.id }, this.fetchTeamData)
	}

	groupByCompetition = () => {
		let competitionsArray = []
		let fixtures = []
		let currentCompetitionId = 0
		this.state.fixturesData.forEach((fixture, index)=> {
			if (fixture.data.competition_id !== currentCompetitionId){
				currentCompetitionId = fixture.data.competition_id
				// fixtures.push(fixture)
				if (fixtures.length !== 0) {
					competitionsArray.push(fixtures)
					fixtures = []
				}
			} 
			fixtures.push(fixture)
		})
			if (fixtures.length !== 0){
				competitionsArray.push(fixtures)
			}
		return competitionsArray
	}


	render() {

		return (
			<div>
				<div className="top-banner">
					<div className="team-image home">
						<img src={this.state.teamData.crest_url} alt={this.state.teamData.name} />
					</div>
					<div className="team-headline">
						<h1>{this.state.teamData.name}</h1>					
					</div>
				</div>
				<div className="scores-wrapper">
					{this.groupByCompetition().map((comp, index)=> <CompetitionGroup key={`${comp[0].data.competition_id}-${this.state.currentTeam}`} fixtures={comp} />)}
				</div>
			</div>
			)
	}
}