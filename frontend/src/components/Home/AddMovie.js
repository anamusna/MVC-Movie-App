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
			title: '',
			description: '',
			genre: '',
			rating: 0,
			image: null
		};
		console.log(this.state.rating)
	}

	
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}


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
		let num = Number.parseInt(value)
		console.log(num)
		this.setState({
			rating : num
		});
	};
	onChangeImage = (e) => {
		console.log(e.target.files[0])
		this.setState({
			image : e.target.files[0]
		});
	};  

	onAddMovie() {
		axios.post('http://localhost:3001/api/movies/new').then((response) => console.log(response));
		
	}; 
	
	
	onFormSubmit=(e)=>{
		e.preventDefault();
		
		const formData = new FormData();
		formData.append('image', this.state.image);
		formData.append('title', this.state.title);
		formData.append('description',  this.state.description );
		formData.append('genre', this.state.genre );
		formData.append('rating', this.state.rating);
		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
		};
		console.log(formData, this.state)
		axios.post('http://localhost:3001/api/movies/new', formData, config)
           .then((response) => {
               alert(response,'The file is successfully uploaded');
           }).catch((error) => { console.log(error)
       });
   }

	

	render() {
		const { title, description, genre, rating } = this.state
		return (
			<Container>
				<h1>Add your movie here</h1>
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
						<button type="submit">
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



