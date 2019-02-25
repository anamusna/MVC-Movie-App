import React, { Component } from 'react';
import './css/MoviesList.css';
import MovieCard from './MovieCard';
import axios from 'axios';

//import { Link } from 'react-router-dom';
import Genres from './Genres';
import Rating from './Rating';
let genres = Genres;

class MoviesList extends Component {
	constructor(props) {
		super(props);
		this.changeRating = this.changeRating.bind(this);
		this.searchByGenre.bind(this);
		this.searchByTitle.bind(this);
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

	//Delete a movie
	removeMovie = (e) => {
		e.preventDefault();

		axios
			.delete('http://localhost:3001/api/movies/:id;')
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
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
		console.log('oops', movie.genres);
	};

	render() {
		return (
			<div className="App">
				<div className="genres">
					<hr />
					<h3 className="genres-title">Categories</h3>

					<div className="genres-list">{genres.map((movie, index) => <a href="#">{movie}</a>)}</div>
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
							return <MovieCard movie={movie} key={index} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default MoviesList;
