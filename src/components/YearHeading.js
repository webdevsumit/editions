import React, { Component } from 'react';

class YearHeading extends Component{
	state = {}
	
	render(){
		return(
			<div className='headingContainer'>
				<span className='heading'><h2>{this.props.heading}</h2></span>
			</div>
		)
	}
}

export default YearHeading;
