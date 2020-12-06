import React, { Component } from 'react';
import DayCard from './DayCard';
import DayDescription from './DayDescription';

class MonthContainer extends Component{
	state = {}
	render(){
		const {MonthData} = this.props;
		return(
			<div>
				{MonthData.map((md)=>
				<div key={md.CardNo}>
					<div className='dayCardContainer'>
					<DayCard CardNo={md.CardNo}/>
					<div className='dayDescriptionContainer'><DayDescription
					thumbnail={md.thumbnail}
					CardHeading={md.CardHeading}
					CardDescription={md.CardDescription}
					/></div></div>
				</div>)}
			</div>
		);
	}
}

export default MonthContainer;
