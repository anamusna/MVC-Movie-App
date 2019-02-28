import React, { Component } from 'react';
import './css/MoviesList.css';
import MovieCard from './MovieCard';
import axios from 'axios';
import Genres from './Genres';
import Rating from './Rating';
let genres = Genres;

class MoviesList extends Component {
	constructor(props) {
		super(props);
		this.changeRating = this.changeRating.bind(this);
		this.searchByGenre.bind(this);
		this.searchByTitle.bind(this);
		this.removeMovie.bind(this);
		this.state = {
			movies       : [],
			searchRating : 0,
			minRating    : 0,
			newRating    : undefined,
			title        : undefined
		};
	}

	//get the data

	componentDidMount() {
		axios.get('http://localhost:3001/api/movies/list').then((results) => {
			console.log(results);

			this.setState({ movies: results.data });
			console.log(this.state.movies);
		});
	}
	//Edit a movie

	editMovie = (id) => {
		console.log(id);
		axios.get('http://localhost:3001/api/movies/?id=' + id).then((res) => console.log(res));
		console.log('it works with edit!');
	};

	//Delete a movie

	removeMovie = (id) => {
		console.log(id);
		axios.delete('http://localhost:3001/api/movies/?id=' + id).then((res) => console.log(res));
	};

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

	searchByGenre = (movie) => {
		this.setState({
			movies : !movie.includes('All')
				? this.state.movies.filter((movie) => String(movie.genres).toLowerCase())
				: this.state.movies
		});
		console.log('oops', movie);
	};

	render() {
		return (
			<div className="list">
				<div className="genres">
					<h3 className="genres-title">Categories</h3>

					<div className="genres-list">
						{genres.map((movie, index) => (
							<span key={index} onClick={(e) => this.searchByGenre(movie)}>
								{movie}
							</span>
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
							<Rating
								rating={this.state.minRating}
								onChangeRating={(newRating) => this.changeRating(newRating)}
							/>
						</div>
					</div>
					<div className="all-movies-list">
						{this.state.movies.map((movie, index) => {
							return <MovieCard movie={movie} key={index} removeMovie={this.removeMovie} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default MoviesList;
