import React from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class EditMovie extends React.Component {
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

	onMovieEdit = (id) => {
		axios.get('http://localhost:3001/api/movies/?id=' + id).then((res) => console.log(res));
		console.log(id);

		const formData = new FormData();
		formData.append('image', this.props.image);
		formData.append('title', this.props.title);
		formData.append('description', this.props.description);
		formData.append('genre', this.props.genre);
		formData.append('rating', this.props.rating);
		const config = {
			headers : {
				'content-type' : 'multipart/form-data'
			}
		};

		console.log(this.state);
		axios
			.put('http://localhost:3001/api/movies', config)
			.then((response) => {
				return response;
			})
			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		return (
			<div>
				<div className="add">
					<div data-toggle="modal" onClick={this.toggle}>
						<span>Update The Movie</span>
					</div>
				</div>

				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>Update your movie here</ModalHeader>
					<ModalBody>
						<div className="text-right">
							<a className="btn btn-blue no-margin" href="/home">
								Back
							</a>
						</div>
						<Form onSubmit={this.onFormSubmit}>
							<FormGroup>
								<Label for="title">Name</Label>
								<Input
									required
									type="text"
									name="title"
									id="title"
									value={this.props.title}
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
									value={this.description}
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
									value={this.genre}
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
									value={this.rating}
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
							<ModalFooter>
								<Button type="submit" color="primary">
									Update
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

export default EditMovie;
