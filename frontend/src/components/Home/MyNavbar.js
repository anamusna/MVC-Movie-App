import React from 'react';
import './css/mynavbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const SidebarUI = ({ isOpen, ...rest }) => {
	const classes = [ 'Sidebar', isOpen ? 'is-open' : '' ];

	return <div aria-hidden={!isOpen} className={classes.join(' ')} {...rest} />;
};

SidebarUI.Overlay = (props) => <div className="SidebarOverlay" {...props} />;

SidebarUI.Content = ({ width = '20rem', isRight = false, ...rest }) => {
	const classes = [ 'SidebarContent', isRight ? 'is-right' : '' ];
	const style = {
		width,
		height : '100%',
		top    : 0,
		right  : isRight ? `-${width}` : 'auto',
		left   : !isRight ? `-${width}` : 'auto'
	};

	return <div className={classes.join(' ')} style={style} {...rest} />;
};

class MyNavbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen : props.isOpen
		};

		this.openSidebar = this.openSidebar.bind(this);
	}

	openSidebar(isOpen = true) {
		this.setState({ isOpen });
	}

	render() {
		const { isOpen } = this.state;
		const { hasOverlay, isRight } = this.props;
		return (
			<SidebarUI isOpen={isOpen}>
				<button type="button" onClick={this.openSidebar}>
					Open Sidebar
				</button>
				<SidebarUI.Content isRight={isRight}>hi</SidebarUI.Content>
				{hasOverlay ? <SidebarUI.Overlay onClick={() => this.openSidebar(false)} /> : false}
			</SidebarUI>
		);
	}
}

export default MyNavbar;
