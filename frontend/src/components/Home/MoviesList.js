import React, { Component } from "react";
import "./css/MoviesList.css";
import { Container } from "reactstrap";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import RateFilter from "./RateFilter";
let categories = Categories;

class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.changeRating = this.changeRating.bind(this);
        this.searchByCategory.bind(this);
        this.searchByName.bind(this);
        this.state = {
            movies: this.props.movies,
            minRating: 0,
            newRating: undefined,
            name: undefined
        };
    }
    name;
    newRating;
    filter() {
        return this.name && this.newRating
            ? this.setState({
                movies: this.props.movies.filter(
                    el =>
                        el.rating >= this.newRating &&
                        el.name.toLowerCase().includes(this.name)
                )
            })
            : this.name
                ? this.setState({
                    movies: this.props.movies.filter(el =>
                        el.name.toLowerCase().includes(this.name)
                    )
                })
                : this.newRating
                    ? this.setState({
                        movies: this.props.movies.filter(
                            el => el.rating >= this.newRating
                        )
                    })
                    : this.setState({
                        movies: this.props.movies
                    });
    }

    changeRating = newRating => {
        this.newRating = newRating;
        this.setState({
            minRating: newRating,
            newRating: newRating
        });
        this.filter();
    };
    searchByName = value => {
        console.log(value);
        this.name = value;
        this.setState({
            name: value.toLowerCase()
        });
        this.filter();
    };

    searchByCategory = value => {
        this.setState({
            minRating: 0,
            movies: !value.includes("all")
                ? this.props.movies.filter(
                    el => String(el.category).toLowerCase() === value.toLowerCase()
                )
                : this.props.movies
        });
    };
    render() {
        return (
            <div className="movies-list center row">
                <div className="categories">
                    <h2 className="categories-title ">Categories</h2>
                    <div className="categories-list">
                        {categories.map((el, i) => (
                            <p key={i} onClick={e => this.searchByCategory(el)}>
                                {el}
                            </p>
                        ))}
                    </div>

                </div>


                <div className="center">
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search your movie..."
                        onChange={e => this.searchByName(e.target.value)}
                    />

                    <Link to="/new" className=" btn btn-outline-secondary add">

                        add movie
                    </Link>
                </div>
                <RateFilter
                    rating={this.state.minRating}
                    onChangeRating={newRating => this.changeRating(newRating)}
                />
                <div className="movies-content">
                    {this.state.movies.map((e, i) => {
                        return <MovieCard item={e} key={i} />;
                    })}
                </div>



            </div>



        );
    }
}

export default MoviesList;
