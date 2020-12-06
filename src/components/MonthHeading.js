import React, { Component } from 'react';

class MonthHeading extends Component{
	state = {
		
	}
	render(){
		return(
			<div>
				<span><h3>{this.props.monthHeadingName}</h3></span>
			</div>
		);
	}
}

export default MonthHeading;
