import React from 'react';
import './css/card.css';




class MovieCard extends React.Component {



	
	
	render() {
		return (
			
			<div className="card"
			style={{
				backgroundImage : `url('${this.props.movie.image}' )`}}
			>

				<div className="card-content">
				
					<h3 className="card-title">Title:<a href=""> {this.props.movie.title}</a></h3>
				
					{/* <div className="movie-picture"
						style={{
							backgroundImage : `url('${this.props.movie.image}')`}}/> */}
					<hr/>
					<div className="card-desc">Director: {this.props.movie.director}</div>
					<hr/>
					<div className="card-date">Genre: {this.props.movie.genre}</div>
					<hr/>
					<div className="card-genre">Description:  {this.props.movie.description}</div>
					<hr/>
					<div className="card-rating">Rating: {this.props.movie.rating} </div>
					<hr/>
					<div className="card-director">image:<img src= {this.props.movie.image} alt="movie"/> </div>
					<hr/>
					<div className="card-updated">Updated: {this.props.movie.updated_at} </div>
				</div>
			</div>
		);
	}
}

export default MovieCard;
