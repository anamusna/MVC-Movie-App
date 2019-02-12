import React, { Component } from 'react';
import './css/MoviesList.css';
import MovieCard from './MovieCard';
import axios from 'axios';

class MoviesList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies : []
		};
	}

	componentDidMount() {
		axios.get('http://localhost:3001/api/movies/list').then((results) => {
			console.log(results);

			this.setState({ movies: results.data });
		});
		console.log(this.state.movies.results);
	}
	render() {
		return (
			<div className="movies-list center row">
				{this.state.movies.map((movie, index) => {
					return <MovieCard movie={movie} key={index} />;
				})}
			</div>
		);
	}
}

export default MoviesList;
