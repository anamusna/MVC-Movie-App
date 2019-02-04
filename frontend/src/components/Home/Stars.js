import React, { Component } from "react";

class Stars extends Component {
    stars = [1, 2, 3, 4, 5];
    render() {
        let callback = this.props.onClickStar ? this.props.onClickStar : () => { };
        return (
            <span>
                {Array.from(
                    { length: 5 },
                    (el, i) =>
                        i < this.props.rating ? (
                            <span key={i} onClick={() => callback(i + 1)}>
                                <i className="fas fa-star yellow" />
                            </span>
                        ) : (
                                <span key={i} onClick={() => callback(i + 1)}>
                                    <i className="fas fa-star " />
                                </span>
                            )
                )}
            </span>
        );
    }
}

export default Stars;
