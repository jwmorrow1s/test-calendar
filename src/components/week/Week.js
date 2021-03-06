import React from 'react';
import Day from '../day/Day';
import { getLengthOfMonth } from '../calendar/utils/calendarDetailProvider';
// import { getLengthOfMonth } from '../../utils/calendarUtils';

class Week extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            firstDate: this.props.firstDate,
        };
    }

    style = {
        display: "flex",
        flexDirection: "row"
    };

    renderDays = () => {
        
        const daysToDisplay = []
        const {year, month, firstDate, clickedHandler, daySelected} = this.props;

        if(firstDate === null){
            return;
        }

        const lengthOfMonth = getLengthOfMonth(year, month);
        const endOfWeek = firstDate + 6;

        for(let dayIter = firstDate;
            dayIter <= endOfWeek && dayIter <= lengthOfMonth; 
            dayIter++)
        {
            
            daysToDisplay.push(
                <Day 
                    year={year}
                    month={month}
                    clickedHandler={clickedHandler}
                    key={dayIter} 
                    date={dayIter}
                    daySelected={daySelected}
                />)
        }
        
        return daysToDisplay;
    }

    render(){
    
        return (
            <div style={this.style}>
            {this.renderDays()}
            </div>
        );
    }
  
}

export default Week;