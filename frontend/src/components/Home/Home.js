import React from 'react';
import MoviesList from './MoviesList';
import "./css/home.css";
import { BrowserRouter as Redirect } from 'react-router-dom';
//import Movies from './Movies';
import UserHead from '../Header/UserHead';
import axios from 'axios';

//

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            movies: [],
            /* title:"",
            director:"",
            genre:"",
            description:"",
            rating: "" ,
            updated_at: ""
*/            
       }; 
      }
       
        componentDidMount(){
            axios.get('http://localhost:3001/api/movies/list')
            .then(results =>{
            console.log(results);
            
            this.setState({movies: results.data})
          });
          console.log(this.state.movies.results);
          
        }
       


      
    

    /* onAddMoviePressed = (value) => {
        this.setState(
            {
                movies : this.state.movies.concat(value)
            },
            () => {
                return <Redirect to="/home" />;
            }
        );
    }; */
    render() {

        let  movies  = this.state.movies;
        
        return (
            <div className="center">
                <UserHead />
                
                <h2 id="welcomeText">AFTER LOGIN/SIGNUP</h2>


                {this.state.movies.map((movie, index)=>
                    <li className="list" key={index}>
                        <a href=""><h4> Title:{movie.title}</h4></a>
                    <h4> Title:{movie.title}</h4>
                    <hr/>
                    <h6>Director:{movie.director}</h6>
                    <hr/>
                    <h6>Genre:{movie.genre}</h6>
                    <hr/>
                    <h6>Description:{movie.description}</h6>
                    <hr/>
                    <h6>Rating:{movie.rating}</h6>
                    <hr/>
                    <h6>Updated:{movie.updated_at}</h6>
                    <hr/>
                   
                    
                    </li>
                )}
                <MoviesList movies={movies} />
            </div>
        );
    }
}

export default Home;