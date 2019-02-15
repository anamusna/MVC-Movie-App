import React from 'react';
import './css/addMovie.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { Container, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class AddMovie extends React.Component {
	constructor(props) {
		super(props);
		/* let added = false; */
		this.state = {
			movies : []
		};
	}

	componentDidMount() {
		axios.post('http://localhost:3001/api/movies/new').then((results) => {
			console.log(results);

			this.setState({ movies: results.data });
		});
		console.log(this.state.movies.results);
	}

	onChangeName = (value) => {
		this.setState({
			title : value
		});
	};
	onChangeDesc = (value) => {
		this.setState({
			description : value
		});
	};
	onChangeCat = (value) => {
		this.setState({
			genre : value
		});
	};
	onChangeRating = (value) => {
		this.setState({
			rating : value
		});
	};
	onChangeImage = (value) => {
		this.setState({
			image : value
		});
	};

	onAddMovie(value) {
		axios.post('http://localhost:3001/api/movies/new', value).then((response) => console.log(response));
	}

	render() {
		return (
			<Container>
				<h1>Add your movie here</h1>
				<Form>
					<FormGroup>
						<Label for="title">Name</Label>
						<Input
							required
							type="text"
							name="title"
							id="title"
							placeholder="Movie name"
							onChange={(e) => this.onChangeName(e.target.value)}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="description">Description</Label>
						<Input
							required
							type="textarea"
							name="description"
							id="description"
							placeholder="movie description"
							onChange={(e) => this.onChangeDesc(e.target.value)}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="genre">Genre</Label>
						<Input
							required
							type="select"
							name="genre"
							id="genre"
							onChange={(e) => this.onChangeCat(e.target.value)}
						>
							<option>Action</option>
							<option>Drama</option>
							<option>Romance</option>
							<option>Thriller</option>
							<option>Animation</option>
							<option>Sci-Fi</option>
							<option>Horror</option>

							<option>Adventure</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Label for="rating">Rating</Label>
						<Input
							required
							type="select"
							name="rating"
							id="rating"
							onChange={(e) => this.onChangeRating(e.target.value)}
						>
							<option>0</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</Input>
					</FormGroup>

					<FormGroup>
						<Label for="image">File</Label>
						<Input
							required
							type="text"
							name="image"
							placeholder="url of your image"
							id="image"
							onChange={(e) => this.onChangeImage(e.target.value)}
						/>
						<button type="button" onClick={() => this.onAddMovie(this.state)}>
							add movie
						</button>
						<FormText color="muted">
							This is some placeholder block-level help text for the above input. It's a bit lighter and
							easily wraps to a new line.
						</FormText>
					</FormGroup>

					<Link className="add" to="/new">
						<i className="fas fa-plus" />
					</Link>
				</Form>
			</Container>
		);
	}
}

export default AddMovie;
