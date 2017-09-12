import React from 'react'
import { Link } from 'react-router-dom'
import Img from 'react-image'
import CompetitionsAdapter from '../adapters/competitionsAdapter'

export default class Competition extends React.Component {
	state = {
		data: []
	}

	componentDidMount() {
    const adapter = new CompetitionsAdapter()
    adapter.getAllTeamsByCompetition().then(json => this.setState({data: json }))
	}

	getThumbnails = (teams) => {
		return teams.map((team, index)=> <Img key={index} width="20px" height="auto" src={[team.crest_url, "/img/logo-placeholder.png"]} alt="" />)
	}

	render() {
		console.log(this.state)
		const competitions = this.state.data.map((data, index)=> <Link key={index}to={'/competitions/' + data.competition.id + '/fixtures'} ><div className="league"><div className="league-inner"><h2>{data.competition.name}</h2><div className="team-thumbnails">{this.getThumbnails(data.teams)}</div></div></div></Link>)
		return (
			<div>
				<h1 style={{textAlign: 'center', fontSize: '2.5em'}}>All Leagues</h1>
				<div className="all-competitions-wrapper">
					{competitions}
				</div>
			</div>
			)
	}

}