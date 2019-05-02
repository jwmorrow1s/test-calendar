import React from 'react';
import { getMonthName } from '../calendar/utils/calendarDetailProvider';

class MonthPicker extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        
        };
    }

    render(){
        const {year, month} = this.props;
        
        return (
            <div id="MonthPicker">
                <div id="month-select-left">&#8249;</div>
                {getMonthName(month) + " " + year}
                <div id="month-select-right">&#8250;</div>
            </div>
        );
    }
  
}

export default MonthPicker;