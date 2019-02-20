import React from 'react';

export default class StarsRating extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rating     : this.props.movie.rating,
			fakeRating : null
		};
	}

	rate = (i) => {
		if (this.props.getRating) {
			this.props.getRating(i);
		}

		this.setState({
			rating : i
		});
	};

	starMouseOver = (i) => {
		this.setState({
			fakeRating : i
		});
	};

	starMouseOut = () => {
		this.setState({
			rating     : this.state.rating,
			fakeRating : null
		});
	};

	render() {
		let stars = [];
		let startFill = 0;

		if (this.state.fakeRating) {
			startFill = this.state.fakeRating;
		} else {
			startFill = this.state.rating;
		}

		for (let i = 1; i <= 5; i++) {
			stars.push(
				<span
					key={i}
					className={startFill + 1 > i ? 'fill' : 'stars-style'}
					onClick={this.rate.bind(this, i)}
					onMouseOver={this.starMouseOver.bind(this, i)}
					onMouseOut={this.starMouseOut}
				>
					★
				</span>
			);
		}
		return stars;
	}
}
