import React, { Component } from 'react';
import './css/MoviesList.css';
import MovieCard from './MovieCard';
import axios from 'axios';

class MoviesList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies : [],
			
		};
	}

	componentDidMount() {
		axios.get('http://localhost:3001/api/movies/list').then((results) => {
			

			this.setState({ movies: results.data });
		
		});
		
		
	}
	render() {

		return (
			<div className="movies-list">
				<div className="all-movies-list">
				
				{this.state.movies.map((movie, index) => {
						return (
							<div>	
							<MovieCard movie={movie} key={index} />
							</div>
						)
						
					})}
				</div>
			</div>
		);
	}
}

export default MoviesList;
