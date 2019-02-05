import React from "react";
import "./css/card.css";

const MovieRating = props => {
    let stars = ["1", "2", "3", "4", "5"];
    return (
        <span className="rating">
            {stars.map(el => {
                return el <= props.rating ? (

                    <i className="fas fa-star yellow" />
                ) : (
                        <i className="fas fa-star white" />
                    );
            })}
        </span>
    );
};
export default MovieRating;
