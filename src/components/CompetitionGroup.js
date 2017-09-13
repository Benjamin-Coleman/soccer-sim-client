import React from 'react'
import FixtureItem from './FixtureItem'
import { TweenMax } from 'gsap'

export default class CompetitionGroup extends React.Component {

	state = {
		fixturesData: this.props.fixtures,
	}

	componentWillReceiveProps = (nextProps) => {
		this.setState({fixturesData: nextProps.fixtures})
	} 

	componentDidMount = () => {
		const scoreBoxesElements = this.refs.teamScoresWrapper.querySelectorAll('.score-box')
		TweenMax.staggerFromTo(scoreBoxesElements, .6, {opacity: 0, y: 10}, {opacity: 1, y: 0, ease: 'Power2'}, .1)
	}

	scoreBoxes = () => {
		let scoreBoxes = this.state.fixturesData.map((fixture, index)=> {
			return <FixtureItem fixture={fixture} key={fixture.data.id} />
		})
		return scoreBoxes
	}

	render() {
		return (
		<div ref="teamScoresWrapper">
			<div className="divider"><hr /><h3>{this.state.fixturesData[0].competition.name}</h3></div>
			<div className="scores-wrapper">
				{ this.scoreBoxes() }
			</div>
		</div>
		)
	}
}