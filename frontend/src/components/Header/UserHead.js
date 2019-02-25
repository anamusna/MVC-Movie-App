import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
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
			<Navbar color="light" light expand="md" style={{ width: '100vw' }}>
				<NavbarBrand href="/">Movie App</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink href="/home" className="btn btn-outline-info">
								PROFILE
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}

export default UserHead;
