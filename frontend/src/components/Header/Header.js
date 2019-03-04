import React from 'react';
import film from './film.png';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './header.css';

class Header extends React.Component {
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
			<div>
			
				<Navbar  className ="navbar"  light expand="md" style={{ width: '100vw' }}>
					<NavbarBrand href="/"><img className="App-logo" src={film} alt=""/><a className="navbar-header" href="/">Movie recommendation</a></NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
						<NavItem>
					
							
								<NavLink className="navbutton" href="/" /* class="btn btn-outline-secondary" */>
									Home
								</NavLink>
							</NavItem>&nbsp;
							<NavItem>
							
								<NavLink className="navbutton" href="/login" /* class="btn btn-outline-secondary" */>
									Login
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Header;
