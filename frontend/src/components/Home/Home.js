import React from 'react';
import MoviesList from './MoviesList';
import './css/home.css';
import UserHead from '../Header/UserHead';
import { Link } from 'react-router-dom';

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
		return (
			<div className="App">
				<UserHead />

				<h2 id="welcomeText">AFTER LOGIN/SIGNUP</h2>
				<Link className="add" to="/new">
					add
					<i className="fas fa-plus" />
				</Link>
				<MoviesList />
			</div>
		);
	}
}

export default Home;
