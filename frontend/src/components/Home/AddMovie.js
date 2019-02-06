import React from "react";
import "./css/addMovie.css";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { Container, Form, FormGroup, Label, Input, FormText } from "reactstrap";
class AddMovie extends React.Component {
    constructor(props) {
        super(props);
        let added = false;
        this.state = {
            name: "",
            desc: "",
            category: "",
            image: "",
            year: new Date().getFullYear().toString(),
            rating: 0
        };
    }


    componentDidMount(){
        axios.get(`localhost:3001/api/movies`)
        .then(res => {
            console.log('resoen',res);

        })
       
        
    }

    onChangeName = value => {
        this.setState({
            name: value
        });
    };
    onChangeDesc = value => {
        this.setState({
            desc: value
        });
    };
    onChangeCat = value => {
        this.setState({
            category: value
        });
    };
    onChangeRating = value => {
        this.setState({
            rating: value
        });
    };
    onChangeImage = value => {
        this.setState({
            image: value
        });
    };

    onAddMovie(value) {


        console.log('###',value)
 /*        if (!this.state.added) {
            this.props.movies = this.state.movies.concat(value);

            this.added = true;

            return <Redirect to="/home" />;
           
        } */


        axios.post('localhost:3001/api/movies/create', value)
        .then(response=>console.log(response))
      
    }

    render() {
        return (
            <Container>
                <h1>Add your movie here</h1>
                <Form>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input
                            required
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Movie name"
                            onChange={e => this.onChangeName(e.target.value)}
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
                            onChange={e => this.onChangeDesc(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="category">Category</Label>
                        <Input
                            required
                            type="text"
                            name="category"
                            id="category"
                            placeholder="movie category"
                            onChange={e => this.onChangeCat(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Rate">Rating</Label>
                        <Input
                            required
                            type="select"
                            name="Rating"
                            id="Rating"
                            onChange={e => this.onChangeRating(e.target.value)}
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
                            onChange={e => this.onChangeImage(e.target.value)}
                        />
                        <button type="submit" onClick={() => this.onAddMovie(this.state)}>add movie</button>
                        <FormText color="muted">
                            This is some placeholder block-level help text for the above
                            input. It's a bit lighter and easily wraps to a new line.
            </FormText>
                    </FormGroup>

                    <Link
                        className="add"
                        to="/new"
                        
                    >
                        <i className="fas fa-plus" />
                    </Link>
                </Form>
            </Container>
        );
    }
}

export default AddMovie;
