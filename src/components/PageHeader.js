import React from 'react'
import CompetitionsAdapter from '../adapters/competitionsAdapter'
import { TweenMax } from 'gsap'

class PageHeader extends React.Component {

	state = {
		competitionData: {}
	}

	componentDidMount = () => {
    const adapter = new CompetitionsAdapter()
    adapter.getCompetition(this.props.competitionId).then(json => this.setState({competitionData: json }))
    TweenMax.fromTo(this.refs.pageHeader, .5, {opacity: 0, y: 10}, {opacity: 1, y: 0})
  }

  render() {
		return (
			<div style={{overflow: 'hidden'}}>
				<h1 ref="pageHeader" className="page-header">{this.state.competitionData.name}</h1>
			</div>
			)
	}
}

export default PageHeader