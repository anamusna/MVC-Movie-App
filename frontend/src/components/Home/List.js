import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies : []
		};
	}

	componentDidMount() {
		const url = `http://localhost:3001/api/movies/list`;
		console.log(url);
		axios
			.get(url)
			.then((res) => {
				console.log(res.data);
				const movies = res.data;
				this.setState({
					movies : movies
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	removeMovie = (e) => {
		console.log('it works with remove!');
		if (typeof this.props.removeClick === 'function') {
			this.props.removeClick(e);
		} else {
			console.log("Doesn't work with remove");
		}
	};

	render() {
		let movies = this.state.movies.map((e) => (
			<ul onClick={this.editMovie}>
				<li data-id={e.id}>{e.title}</li>
				<li data-id={e.id}>{e.type}</li>
				<li data-id={e.id}>{e.description}</li>
				<button onClick={this.removeMovie}>Delete</button>
			</ul>
		));

		return <div>{movies}</div>;
	}
}

export default List;
