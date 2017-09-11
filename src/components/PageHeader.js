import React from 'react'
import CompetitionsAdapter from '../adapters/competitionsAdapter'

class PageHeader extends React.Component {

	state = {
		competitionData: {}
	}

	componentDidMount = () => {
    const adapter = new CompetitionsAdapter()
    adapter.getCompetition(this.props.competitionId).then(json => this.setState({competitionData: json }))
  }

  render() {
		return (
			<div>
				<h1 className="page-header">{this.state.competitionData.name}</h1>
			</div>
			)
	}
}

export default PageHeader