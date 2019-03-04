import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<div className="center row justify-content-center bottom" id="footer">
				<div className="medium-12 columns">
					<br />

					<span>
						(C)2019 <a href="#">Ansu/Daniel</a>
					</span>
				</div>
			</div>
		);
	}
}

export default Footer;
