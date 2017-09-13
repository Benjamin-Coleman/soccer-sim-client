import React from 'react'
import { Route } from 'react-router-dom'
import FixtureItem from './FixtureItem'
import { TweenMax } from 'gsap'

export default class MatchDay extends React.Component {

	state = {
		fixtures: this.props.fixtures,
	}

	componentDidMount = () => {
		const scoreBoxesElements = this.refs.scoresWrapper.querySelectorAll('.score-box')
		TweenMax.staggerFromTo(scoreBoxesElements, .7, {opacity: 0, y: 10}, {opacity: 1, y: 0, ease: 'Power2'}, .18)
	}

	render() {
		const scoreBoxes = this.state.fixtures.map((fixture, index)=> <Route key={index} path={'/competitions/:id/fixtures'} render={(location) => <FixtureItem location={location} fixture={fixture} key={index} />} />)
		return (
		<div ref="scoresWrapper">
			<div className="divider"><hr /><h3>{new Date(this.state.fixtures[0].data.match_date).toISOString().substring(0, 10)}</h3></div>
			<div className="scores-wrapper">
				{ scoreBoxes }
			</div>
		</div>
		)
	}
}