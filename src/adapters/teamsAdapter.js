export default class TeamsAdapter {

	constructor() {
		this.baseURL = 'http://localhost:3000/api/v1/'
	}

	getTeamData(teamId) {
		const options = {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		}

		return fetch(this.baseURL + `teams/${teamId}`, options).then( res => res.json())
	}

	getAllTeams() {
		const options = {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		}

		return fetch(this.baseURL + `teams`, options).then( res => res.json())
	}
}