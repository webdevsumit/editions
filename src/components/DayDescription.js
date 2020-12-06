import React, { Component } from 'react';

class DayDescription extends Component{
	state = {
		
	}
	render(){
	const {thumbnail,CardHeading,CardDescription} = this.props;
		return(
			<div className='dayDescriptionContainer'>
				<img src={thumbnail} alt='thumbnail'/>
				 <div>
					 <h5>{CardHeading} H</h5>
					 <p className='description'>{CardDescription}</p>
				 </div>
			</div>
		);
	}
}

export default DayDescription;
