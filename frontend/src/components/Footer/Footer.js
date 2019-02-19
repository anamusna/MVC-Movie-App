import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<div className="center row justify-content-center fixed-bottom" id="footer">
				<div className="medium-12 columns">
					<br />
					<br />
					<p>
						(C)2019 <a href="/home">Ansu/Daniel</a>
					</p>
				</div>
			</div>
		);
	}
}

export default Footer;
