import React, { Component } from 'react';
import './css/MoviesList.css';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import { Container, Input } from 'reactstrap';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies : this.props.movies,
			title  : undefined
		};
		this.searchByCategory.bind(this);
		this.searchByName.bind(this);
	}
	title;
	filter() {
		return this.title
			? this.setState({
					movies : this.props.movies.filter((el) => el.title.toLowerCase().includes(this.title))
				})
			: this.newRating
				? this.setState({
						movies : this.props.movies.filter((el) => el.rating >= this.newRating)
					})
				: this.setState({
						movies : this.props.movies
					});
	}

	searchByName = (value) => {
		console.log(value);
		this.title = value;
		this.setState({
			title : value.toLowerCase()
		});
		this.filter();
	};

	searchByCategory = (value) => {
		this.setState({
			minRating : 0,
			movies    : !value.includes('all')
				? this.props.movies.filter((el) => String(el.category).toLowerCase() === value.toLowerCase())
				: this.props.movies
		});
	};
	render() {
		return (
			<div className="searchFilter">
				<div className="filter">
					<div className="categories">
						<h3 className="categories-title">Categories</h3>
						<div className="categories-list">
							{Categories.map((el, i) => (
								<a key={i} onClick={(e) => this.searchByCategory(el)}>
									{el}
								</a>
							))}
						</div>
					</div>
				</div>
				<div className="movies-list-search">
					<Input
						className="search-input"
						type="text"
						placeholder="Search your movie..."
						onChange={(e) => this.searchByName(e.target.value)}
					/>
					<Link className="add" to="/new">
						<i class="fas fa-plus" />add
					</Link>
				</div>
			</div>
		);
	}
}

export default Search;
