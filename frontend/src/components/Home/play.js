import React from 'react';
import ReactDom from 'react-dom';
import { render } from 'react-dom';
import AvatarEditor from 'react-avatar-editor';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from 'material-ui/Slider';

class App extends React.Component {
	constructor(props) {
		super(props);
		this._handleSave = this._handleSave.bind(this);
		this._handleCancel = this._handleCancel.bind(this);
		this._handleFileChange = this._handleFileChange.bind(this);
		this._setEditorRef = this._setEditorRef.bind(this);
		this._handleZoomSlider = this._handleZoomSlider.bind(this);
		this.state = {
			cropperOpen : false,
			img         : null,
			zoom        : 2,
			croppedImg  : 'http://www.fillmurray.com/400/400'
		};
	}
	_handleZoomSlider(event, value) {
		let state = this.state;
		state.zoom = value;
		this.setState(state);
	}

	_handleFileChange(e) {
		window.URL = window.URL || window.webkitURL;
		let url = window.URL.createObjectURL(e.target.files[0]);
		ReactDom.findDOMNode(this.refs.in).value = '';
		let state = this.state;
		state.img = url;
		state.cropperOpen = true;
		this.setState(state);
	}
	_handleSave(e) {
		if (this.editor) {
			const canvasScaled = this.editor.getImageScaledToCanvas();
			const croppedImg = canvasScaled.toDataURL();

			let state = this.state;
			state.img = null;
			state.cropperOpen = false;
			state.croppedImg = croppedImg;
			this.setState(state);
		}
	}
	_handleCancel() {
		let state = this.state;
		state.cropperOpen = false;
		this.setState(state);
	}
	_setEditorRef(editor) {
		this.editor = editor;
	}
	render() {
		return (
			<MuiThemeProvider>
				<div style={{ height: 500 }}>
					<Avatar src={this.state.croppedImg} size={100} />
					<RaisedButton label="Upload an Image" labelPosition="before" containerElement="label">
						<input ref="in" type="file" accept="image/*" onChange={this._handleFileChange} />
					</RaisedButton>
					{this.state.cropperOpen && (
						<div
							className="cropper-wrapper"
							style={{
								position       : 'absolute',
								top            : 0,
								width          : '100%',
								height         : '100%',
								background     : 'rgba(200,200,200,.8)',
								display        : 'flex',
								flexDirection  : 'column',
								alignItems     : 'center',
								justifyContent : 'center'
							}}
						>
							<AvatarEditor
								ref={this._setEditorRef}
								image={this.state.img}
								width={200}
								height={200}
								border={50}
								color={[ 255, 255, 255, 0.6 ]} // RGBA
								scale={this.state.zoom}
								rotate={0}
							/>
							<div
								style={{
									display        : 'flex',
									justifyContent : 'center',
									alignItems     : 'center'
								}}
							>
								<label
									style={{
										fontSize      : 12,
										marginRight   : 10,
										paddingBottom : 22,
										fontWeight    : 600
									}}
								>
									Zoom
								</label>
								<Slider
									min={1}
									max={10}
									step={0.1}
									value={this.state.zoom}
									onChange={this._handleZoomSlider}
									style={{ width: 200 }}
								/>
							</div>
							<div>
								<RaisedButton
									label="CANCEL"
									labelPosition="before"
									containerElement="label"
									onClick={this._handleCancel}
								/>
								<RaisedButton
									label="SAVE"
									labelPosition="before"
									containerElement="label"
									onClick={this._handleSave}
								/>
							</div>
						</div>
					)}
				</div>
			</MuiThemeProvider>
		);
	}
}

render(<App />, document.getElementById('root'));
