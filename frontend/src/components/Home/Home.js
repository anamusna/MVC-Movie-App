import React from 'react';
import MoviesList from './MoviesList';
import './css/home.css';
import UserHead from '../Header/UserHead';

//

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	/* onAddMoviePressed = (value) => {
        this.setState(
            {
                movies : this.state.movies.concat(value)
            },
            () => {
                return <Redirect to="/home" />;
            }
        );
    }; */
	render() {
		let movies = this.state.movies;

		return (
			<div className="center">
				<UserHead />
				<h2 id="welcomeText">AFTER LOGIN/SIGNUP</h2>
				<MoviesList />
			</div>
		);
	}
}

export default Home;
