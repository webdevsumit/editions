import React, { Component } from 'react';
import YearHeading from './YearHeading';
import YearContainer from './YearContainer'

class MainContainer extends Component{
	state = {
		'Data':[
				{
				'id':1,
				'YearHeading':2020,
				'YearData':[
						{'id':1,
						'MonthName':'January',
						'MonthData':[{
							'CardNo':1,
							'thumbnail':'https://images.app.goo.gl/qsMFppmXqzFLWkpv9',
							'CardHeading':'News is here',
							'CardDescription':'thats a greate news',												
							},],
						},
						{'id':21,
						'MonthName':'February',
						'MonthData':[{
						'CardNo':1,
						'thumbnail':'https://images.app.goo.gl/qsMFppmXqzFLWkpv9',
						'CardHeading':'News is here',
						'CardDescription':'thats a greate news',												
							}],
						},
				],
		},]		
	}
	render(){
		return(
			<div className='Main'>
			{this.state.Data.map((yd)=>
			<div key={yd.id}>
				<YearHeading yearHeadingName={yd.YearHeading}/>
				<YearContainer YearData={yd.YearData}/>
			</div>)}
		</div>
		);
	}
}

export default MainContainer;
