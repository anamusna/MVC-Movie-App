import React, { Component } from 'react';
import './css/MoviesList.css';
import MovieCard from './MovieCard';
import axios from 'axios';

import { Link } from 'react-router-dom';
import Genres from './Genres';
import RateFilter from './RateFilter';
let genres = Genres;

class MoviesList extends Component {
	constructor(props) {
		super(props);
		this.changeRating = this.changeRating.bind(this);
		this.searchByGenre.bind(this);
		this.searchByTitle.bind(this);
		this.state = {
			movies    : [],
			minRating : 0,
			newRating : undefined,
			title     : undefined
		};
	}

	componentDidMount() {
		axios.get('http://localhost:3001/api/movies/list').then((results) => {
			console.log(results);

			this.setState({ movies: results.data });
			console.log(this.state.movies);
		});
	}

	title;
	newRating;
	filter() {
		return this.title && this.newRating
			? this.setState({
					movies : this.state.movies.filter(
						(movie) => movie.rating >= this.newRating && movie.title.toLowerCase().includes(this.title)
					)
				})
			: this.title
				? this.setState({
						movies : this.state.movies.filter((movie) => movie.title.toLowerCase().includes(this.title))
					})
				: this.newRating
					? this.setState({
							movies : this.state.movies.filter((movie) => movie.rating >= this.newRating)
						})
					: this.setState({
							movies : this.state.movies
						});
	}

	changeRating = (newRating) => {
		this.newRating = newRating;
		this.setState({
			minRating : newRating,
			newRating : newRating
		});
		this.filter();
	};
	searchByTitle = (value) => {
		console.log(value);
		this.title = value;
		this.setState({
			title : value.toLowerCase()
		});
		this.filter();
	};

	searchByGenre = (value) => {
		this.setState({
			minRating : 0,
			movies    : !value.includes('All')
				? this.state.movies.filter((movie) => String(movie.genre).toLowerCase())
				: this.state.movies
		});
	};
	render() {
		return (
			<div>
				<div className="genres">
					<hr />
					<h3 className="genres-title">Categories</h3>

					<div className="genres-list">
						{genres.map((movie, index) => (
							<a key={index} onClick={(e) => this.searchByGenre(movie)}>
								{movie}
							</a>
						))}
					</div>
				</div>
				<div className="movies-list">
					<div className="movies-list-header">
						<input
							className="search-input"
							type="text"
							placeholder="Search your movie..."
							onChange={(e) => this.searchByTitle(e.target.value)}
						/>

						<div>
							<RateFilter
								rating={this.state.minRating}
								onChangeRating={(newRating) => this.changeRating(newRating)}
							/>
						</div>
					</div>
					<div className="all-movies-list">
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
