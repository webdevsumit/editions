import React, { Component } from 'react';

class DayCard extends Component{
	state = {
		
	}
	render(){
		return(
			<div>
				<span className='cardNo'><p>{this.props.CardNo}</p></span>
			</div>
		);
	}
}

export default DayCard;
