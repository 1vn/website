import React, { Component } from 'react';
import { render } from 'react-dom';

class Portfolio extends Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div>
				Projects
			</div>
		);
	}
}

render(<Portfolio />, document.getElementById("root"));