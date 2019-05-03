import React from 'react';
import { getNameOfDay } from '../calendar/utils/calendarDetailProvider';

class Day extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            date: null,
            isSelected: false,
        };
    }

    getComponentStyle = () => {
        const {date, daySelected} = this.props;
        const currentlySelected = daySelected.selectedDate;
        const isDaySelected = date === currentlySelected;

        return {
            backgroundColor: date > 0 
                ? isDaySelected 
                    ? "blue" 
                    : "white" 
                : "grey"
        };
    }

    handleClick = () => {
        
        const {isSelected} = this.state;
        const {date, selectedDayCallback} = this.props;

        if(date > 0){
            this.setState({isSelected: !isSelected});
            selectedDayCallback(date);
        }
    }

    render(){

        const {year, month, date} = this.props;
        const dayName = getNameOfDay(year, month, date);

        return (
            <div id="Day" style={this.getComponentStyle()}
            onClick={this.handleClick}>
            {(date > 0 ? date : "") + " " + dayName}
            </div>
        );
    }
  
}

export default Day;