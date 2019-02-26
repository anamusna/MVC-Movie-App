import React from 'react';
import './css/addMovie.css';

import axios from 'axios';
//import { Link, Redirect } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input /* FormText  */ } from 'reactstrap';

class AddMovie extends React.Component {
	constructor(props) {
		super(props);
		/* let added = false; */
		this.state = {
			movies      : [],
			title       : '',
			description : '',
			genre       : '',
			rating      : 0,
			image       : {},
			modal       : false
		};
		console.log(this.state.rating);
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState((prevState) => ({
			modal : !prevState.modal
		}));
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	/* 	onChangeName = (value) => {
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
	}; */
	onChangeRating = (value) => {
		let num = Number.parseInt(value);
		console.log(num);
		this.setState({
			rating : num
		});
	};
	onChangeImage = (e) => {
		console.log(e.target.files[0]);
		this.setState({
			image : e.target.files[0]
		});
	};

	onAddMovie() {
		axios.post('http://localhost:3001/api/movies/new').then((response) => console.log(response));
	}

	onFormSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('image', this.state.image);
		formData.append('title', this.state.title);
		formData.append('description', this.state.description);
		formData.append('genre', this.state.genre);
		formData.append('rating', this.state.rating);
		const config = {
			headers : {
				'content-type' : 'multipart/form-data'
			}
		};

		console.log(formData, this.state);
		axios
			.post('http://localhost:3001/api/movies/new', formData, config)
			.then((response) => {
				return response;
			})
			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		const { title, description, genre, rating } = this.state;
		return (
			<div>
				<div className="add">
					<div data-toggle="modal" data-target="/new" onClick={this.toggle}>
						<span>Add New Movie</span>
					</div>
				</div>

				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>Add your movie here</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.onFormSubmit}>
							<FormGroup>
								<Label for="title">Name</Label>
								<Input
									required
									type="text"
									name="title"
									id="title"
									value={title}
									placeholder="Movie name"
									onChange={this.onChange}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="description">Description</Label>
								<Input
									required
									type="textarea"
									name="description"
									id="description"
									value={description}
									placeholder="movie description"
									onChange={this.onChange}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="genre">Genre</Label>
								<Input
									required
									type="select"
									name="genre"
									id="genre"
									value={genre}
									onChange={this.onChange}
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
									value={rating}
									onChange={this.onChange}
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
									type="file"
									name="image"
									placeholder="url of your image"
									id="image"
									onChange={this.onChangeImage}
								/>
							</FormGroup>

							{/* <Link className="add" to="/new">
								<i className="fas fa-plus" />
							</Link> */}
							<ModalFooter>
								<Button type="submit" color="primary">
									Add Movie
								</Button>{' '}
								<Button color="secondary" onClick={this.toggle}>
									Cancel
								</Button>
							</ModalFooter>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

export default AddMovie;
