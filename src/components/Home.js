import React from 'react'

export default class Home extends React.Component {

	render() {
		return (
			<div className="video-wrapper">
				<div className="video-wrapper screen"></div>
				<video style={{height: '109vh',}} src="video/Soccer_field_-Footbull-_Animated_background.mp4" type="video/mp4" autoPlay loop>
				</video>
				<div className="home-inner">
					<h1>SoccerSim</h1>
				</div>
			</div>
			)
	}
}