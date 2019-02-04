import React from "react";
import MoviesList from "./MoviesList";
import { BrowserRouter as Redirect } from "react-router-dom";
import Movies from "./Movies";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: Movies
        };
    }

    onAddMoviePressed = value => {
        this.setState(
            {
                movies: this.state.movies.concat(value)
            },
            () => {
                return <Redirect to="/home" />;
            }
        );
    };
    render() {
        return (

            <div className="">
                <MoviesList movies={this.state.movies} />

            </div>

        );
    }
}

export default Home;
