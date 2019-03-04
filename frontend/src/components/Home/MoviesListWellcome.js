import React, { Component } from 'react';
import './css/MoviesList.css';
import MovieCardWellcome from './MovieCardWellcome';
import axios from 'axios';
import Genres from './Genres';
import Rating from './Rating';
import { Label, Input } from 'reactstrap';
let genres = Genres;

class MoviesListWellcome extends Component {
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
			title        : undefined,
			deleted      : false,
			genres       : false
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
			genres : !movie.includes('All')
				? this.state.movies.filter((movie) => String(movie.genres).toLowerCase())
				: this.state.movies.genres
		});
		console.log('oops', movie);
	};

	render() {
		if (this.state.deleted === true) {
			window.location.reload();
		}

		return (
			<div className="list">
				<div className="genres">
					<Label for="genre">
						<Input
							className="genres-list-input"
							required
							type="select"
							name="genre"
							id="genre"
							value={genres}
							onChange={this.onChange}
						>
							<option>Genre</option>
							<option>All</option>
							<option>Action</option>
							<option>Drama</option>
							<option>Romance</option>
							<option>Thriller</option>
							<option>Animation</option>
							<option>Sci-Fi</option>
							<option>Horror</option>
							<option>Adventure</option>
						</Input>
					</Label>

					{/* <div className="genres-list">
						{genres.map((movie, index) => (
							<span key={index} onClick={(e) => this.searchByGenre(movie)}>
								{movie}
							</span>
						))}
					    </div> */}

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
					</div>
				</div>
				<div className="all-movies-list">
					{this.state.movies.map((movie, index) => {
						return <MovieCardWellcome movie={movie} key={index} removeMovie={this.removeMovie} />;
					})}
				</div>
			</div>
		);
	}
}

export default MoviesListWellcome;
