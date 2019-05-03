import React from 'react';
import { getMonthName } from '../calendar/utils/calendarDetailProvider';
import { sign } from '../calendar/utils/signEnum';

class MonthPicker extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        
        };
    }

    handleClick = sign => {
        const { monthChangeCallback } = this.props;

        monthChangeCallback(sign);
    }

    render(){
        const {year, month} = this.props;
        
        return (
            <div id="MonthPicker">
                <div 
                    id="month-select-left"
                    onClick={() => this.handleClick(sign.NEGATIVE)}
                >
                        &#8249;
                </div>
                {getMonthName(month) + " " + year}
                <div 
                    id="month-select-right"
                    onClick={() => this.handleClick(sign.POSITIVE)}
                >    
                        &#8250;
                </div>
            </div>
        );
    }
  
}

export default MonthPicker;