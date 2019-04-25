import React from 'react';
import Week from '../week/Week';

class Month extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            numWeeks: 4,            
            firstVisibleDate: new Date(2019, 11, 1)
        };
    }

    displayWeeks = () => {

        const {numWeeks} = this.state;

        const display = [];

        for(let i = 0; i < numWeeks; i++){
 
            const {clickedHandler, daySelected} = this.props;
            let date = new Date();
        
            date.setDate(this.state.firstVisibleDate.getDate() + (7 * i));
            display.push(<Week 
                            clickedHandler={clickedHandler}
                            key={i} 
                            firstDate={date} 
                            daySelected={daySelected}
                            />);
            
        }
        return display;
    }

    render(){
        const {daySelected} = this.props;
        console.log("selectedDate at Month: " + daySelected);
        return (
            this.displayWeeks()
        );
    }
  
}

export default Month;