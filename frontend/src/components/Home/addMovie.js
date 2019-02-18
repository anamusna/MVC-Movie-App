import React from 'react';
import './css/mynavbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

class MyNavbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { leftVisible: false, rightVisible: false };
		this.showLeft = this.showLeft.bind(this);
		this.hideLeft = this.hideLeft.bind(this);
		this.showRight = this.showRight.bind(this);
		this.hideRight = this.hideRight.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	showLeft() {
		this.refs.left.show();
		this.setState({ leftVisible: true });
	}

	hideLeft() {
		this.refs.left.hide();
		this.setState({ leftVisible: false });
	}

	showRight() {
		this.refs.right.show();
		this.setState({ rightVisible: true });
	}

	hideRight() {
		this.refs.right.hide();
		this.setState({ rightVisible: false });
	}

	handleClick() {
		if (this.state.leftVisible) {
			this.hideLeft();
		}

		if (this.state.rightVisible) {
			this.hideRight();
		}
	}

	render() {
		return (
			<div onClick={this.handleClick}>
				<button onClick={this.showLeft}>Show Left Menu!</button>
				<button onClick={this.showRight}>Show Right Menu!</button>

				<Menu ref="left" alignment="left">
					<MenuItem>First Page</MenuItem>
					<MenuItem>Second Page</MenuItem>
					<MenuItem>Third Page</MenuItem>
				</Menu>

				<Menu ref="right" alignment="right">
					<MenuItem>First Page</MenuItem>
					<MenuItem>Second Page</MenuItem>
					<MenuItem>Third Page</MenuItem>
				</Menu>
			</div>
		);
	}
}

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = { visible: false };
	}

	show() {
		this.setState({ visible: true });
	}

	hide() {
		this.setState({ visible: false });
	}

	getClassNames() {
		return `${this.state.visible ? 'visible' : ''} ${this.props.alignment}`;
	}

	render() {
		return (
			<div className="menu">
				<div className={this.getClassNames()}>{this.props.children}</div>
			</div>
		);
	}
}

const MenuItem = (props) => <a href="">{props.children}</a>;

ReactDOM.render(<App />, document.getElementById('root'));

export default MyNavbar;
