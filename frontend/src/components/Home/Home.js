import React from 'react';
import MoviesList from './MoviesList';
import './css/home.css';
import UserHead from '../Header/UserHead';
import AddMovie from './AddMovie';
import axios from 'axios';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		axios.get('http://localhost:3001/api/movies/list').then((results) => {
			console.log(results);

			this.setState({ movies: results.data });
			console.log(this.state.movies);
		});
	}
	onAddMoviePressed = (value) => {
		this.setState({
			movies : this.state.movies.concat(value)
		});
	};
	render() {
		return (
			<div className="App">
				<UserHead />
				<h2 id="welcomeText">AFTER LOGIN/SIGNUP</h2>
				<div className="movie-frame">
					<a href="#" className="add-movie">
						<AddMovie addMovieFunction={(value) => this.onAddMoviePressed(value)} />
					</a>
				</div>
				<MoviesList />
			</div>
		);
	}
}

export default Home;
