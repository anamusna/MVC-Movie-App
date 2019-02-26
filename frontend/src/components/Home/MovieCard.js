import React from 'react';
import './css/card.css';

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

class MovieCard extends React.Component {
	render() {
		return (
			<div className="card-folder">
				<Card>
					<CardBody>
						<CardTitle>{this.props.movie.title}</CardTitle>
						<CardSubtitle>{this.props.movie.director}</CardSubtitle>
					</CardBody>
					<CardImg
						className="card-image"
						src={`http://localhost:3001/${this.props.movie.image}`}
						alt="movie image"
					/>
					<CardBody className="card-letters">
						<CardText>{this.props.movie.description}</CardText>
						<CardText>
							<span>{this.props.movie.genre}</span>
							<span>{this.props.movie.rating}</span>
						</CardText>

						<CardText>{this.props.movie.updated_at}</CardText>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default MovieCard;
