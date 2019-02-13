import React from 'react';
import './css/card.css';

class MovieCard extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="card-content">
					<h3 className="card-title">{this.props.movie.title}</h3>
					<div
						className="movie-picture"
						style={{
							backgroundImage : `url('${this.props.movie.image}')`
						}}
					/>
					<div className="card-desc"> {this.props.movie.description}</div>
					<div className="card-date"> {this.props.movie.year}</div>
					<div className="card-genre"> {this.props.movie.genre}</div>
					<div className="card-rating">{this.props.movie.rating} </div>
					<div className="card-director">{this.props.movie.director} </div>
					<div className="card-updated">{this.props.movie.updated_at} </div>
				</div>
			</div>
		);
	}
}

export default MovieCard;
