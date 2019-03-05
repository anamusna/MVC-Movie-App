import React from 'react';
import film from './film.png';
import './header.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink } from 'reactstrap';
//import Avatar from 'react-avatar';

class UserHead extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen : false
		};
	}

	toggle() {
		this.setState({
			isOpen : !this.state.isOpen
		});
	}

	render() {
		return (
			<div className="">
				<Navbar className="navbar" light expand="md" style={{ width: '100vw' }}>
					<NavbarBrand href="/">
						<img className="App-logo" src={film} alt="" />
						<a className="navbar-header" href="/">
							Movie recommendation
						</a>
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavLink className="navbutton" href="/home" /* className="btn " */>
								Profile
							</NavLink>
							<NavLink className="navbutton" href="/" /* className="btn" */>
								Logout
							</NavLink>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default UserHead;
