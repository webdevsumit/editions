import React, { Component } from 'react';
import MonthHeading from './MonthHeading';
import MonthContainer from './MonthContainer';

class YearContainer extends Component{
	state = {}
	render(){
		return(
		<div className='year'>
		{this.props.YearData.map((md)=>
			<div key={md.id}>
				<MonthHeading monthHeadingName={md.MonthName}/>
				<MonthContainer MonthData={md.MonthData}/>
			</div>)}
		</div>
		);
	}
}

export default YearContainer;
