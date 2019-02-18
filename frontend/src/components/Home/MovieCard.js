import React from 'react';
import './css/card.css';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';

class MovieCard extends React.Component {
	render() {
		return (
			<div className="card-folder">
				<Card>
					<CardBody>
						<CardTitle>{this.props.movie.title}</CardTitle>
						<CardSubtitle>{this.props.movie.director}</CardSubtitle>
					</CardBody>
					<CardImg className="card-image" width="100%" src={this.props.movie.image} alt="movie image" />
					<CardBody>
						<CardText>{this.props.movie.description}</CardText>
						<CardText>{this.props.movie.genre}</CardText>
						<CardText>{this.props.movie.rating}</CardText>
						<CardText>{this.props.movie.updated_at}</CardText>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default MovieCard;
