
import React, { Component } from 'react';
import './Home.css';
import MoviesList from "../MoviesPage/MoviesList";
import { BrowserRouter as  Redirect } from "react-router-dom";
import Movies from "../MoviesPage/Movies";


class Home extends Component {
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
           
                <div>  
                    <MoviesList movies={this.state.movies} />}
                    
                </div>
          
        );
    }
}

export default Home;
