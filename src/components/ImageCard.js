import React from 'react';

export default class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { spans: 0 };
		this.imageRef = React.createRef();
	}

	componentDidMount() {
		this.imageRef.current.addEventListener('load', this.setSpans);
	}

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height / 9.8);
		this.setState({ spans });
	};
	render() {
		const { description, urls } = this.props.image;
		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img
					style={{
						borderRadius: '10px',
						boxShadow: '0px 0px 9px 5px rgba(0, 1, 255, .2)',
					}}
					ref={this.imageRef}
					alt={description}
					src={urls.regular}
				/>
			</div>
		);
	}
}
