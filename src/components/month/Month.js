import React from 'react';
import Week from '../week/Week';
import { getSundaysInMonth } from '../calendar/utils/sundaysDateProvider';


class Month extends React.Component {

    constructor(props){
        super(props);
        this.state = {  
            firstVisibleDate: new Date(2019, 11, 1)
        };
    }

    displayWeeks = () => {

        const {year, month, days} = this.props;

        const display = [];

        if(days === null){
            return display;
        }

        const sundaysArray = getSundaysInMonth(year, month);
        const numWeeks = sundaysArray.length;   

        for(let weekIter = 0; weekIter < numWeeks; weekIter++){
 
            const {clickedHandler, daySelected} = this.props;
        
            display.push(<Week 
                            clickedHandler={clickedHandler}
                            year={year}
                            month={month}
                            key={weekIter} 
                            firstDate={sundaysArray[weekIter]} 
                            daySelected={daySelected}
                            />);     
        }
        return display;
    }

    render(){
        
        return (
            this.displayWeeks()
        );
    }
  
}

export default Month;