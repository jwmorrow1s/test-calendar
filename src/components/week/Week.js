import React from 'react';
import Day from '../day/Day';

class Week extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            firstDate: this.props.firstDate,
            display: []
        };
    }

    style = {
        display: "flex",
        flexDirection: "row"
    };

    componentDidMount = () => {
        
        const daysToDisplay = []

        for(let i = 0; i < 7; i++){
            let date = new Date();
            const dayNumber = this.state.firstDate.getDate() + i;
            date.setDate(dayNumber);

            daysToDisplay.push(
                <Day 
                    clickedHandler={this.props.clickedHandler}
                    key={i} 
                    date={date}
                    daySelected={this.props.daySelected}
                />)
        }
        
        this.setState({display: daysToDisplay});
    }

    render(){
        const {daySelected} = this.props;
        console.log("selectedDate at Week: " + daySelected);
        return (
            <div style={this.style}>
            {this.state.display}
            </div>
        );
    }
  
}

export default Week;