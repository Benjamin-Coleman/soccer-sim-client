export default class PredictionsAdapter {

	constructor() {
		this.baseURL = 'http://localhost:3000/api/v1/'
	}

	getFixturesFromCompetition(competitionId) {
		const options = {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		}

		return fetch(this.baseURL + `competitions/${competitionId}/fixtures/`, options).then( res => res.json())
	}
	getFixtureFromCompetition(fixtureId) {
		const options = {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		}

		return fetch(this.baseURL + `fixtures/${fixtureId}`, options).then( res => res.json())
	}
}