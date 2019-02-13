import React, { Component } from 'react';
import './css/MoviesList.css';
import MovieCard from './MovieCard';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
			<div className="my-container">
				<div>
					<div className="movies-list-header">
						<input
							className="search-input"
							type="text"
							placeholder="Search your movie..."
							onChange={(e) => this.searchByName(e.target.value)}
						/>
						<Link className="add" to="/new">
							<i class="fas fa-plus" />add
						</Link>
					</div>
				</div>
				<div className="movies-list">
					<div className="movies-list center row">
						{this.state.movies.map((movie, index) => {
							return <MovieCard movie={movie} key={index} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default MoviesList;
