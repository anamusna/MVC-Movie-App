import React from 'react';

const Rating = ({ count, onChangeRating = () => {} }) => {
	let stars = [];
	for (let i = 0; i < 5; i++) {
		if (i < count) {
			stars.push(
				<span onClick={() => onChangeRating(i + 1)} key={i}>
					★
				</span>
			);
		} else {
			stars.push(
				<span onClick={() => onChangeRating(i + 1)} key={i}>
					☆
				</span>
			);
		}
	}
	return (
		<div>
			<span>search by rate: </span>
			{stars}
		</div>
	);
};

export default Rating;
