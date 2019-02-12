import React from 'react';
import './css/card.css';

class MovieCard extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="card-content">
					<h3 className="card-title">{this.props.movie.title}</h3>

					<p className="card-desc"> {this.props.movie.description}</p>
					<p className="card-date"> {this.props.movie.year}</p>
					<p className="card-genre"> {this.props.movie.genre}</p>
					<p className="card-rating">{this.props.movie.rating} </p>
					<p className="card-director">{this.props.movie.director} </p>
					<p className="card-updated">{this.props.movie.updated_at} </p>
				</div>
			</div>
		);
	}
}

export default MovieCard;
