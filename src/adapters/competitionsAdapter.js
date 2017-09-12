export default class CompetitionsAdapter {

	constructor() {
		this.baseURL = 'http://localhost:3000/api/v1/'
	}

	getCompetition(competitionId) {
		const options = {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		}

		return fetch(this.baseURL + `competitions/${competitionId}`, options).then( res => res.json())
	}

	getCompetitions() {
		const options = {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		}

		return fetch(this.baseURL + `competitions`, options).then( res => res.json())
	}

	getAllTeamsByCompetition() {
		const options = {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		}

		return fetch(this.baseURL + `/competitions/teams`, options).then( res => res.json())
	}
}