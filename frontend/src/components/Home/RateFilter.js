import React, { Component } from "react";
import Stars from "./Stars";

class RateFilter extends Component {
    render() {
        return (
            <p>
                search by rate :
        <Stars
                    rating={this.props.rating}
                    onClickStar={i => this.props.onChangeRating(i)}
                />
            </p>



        );
    }
}

export default RateFilter;
