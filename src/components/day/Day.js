import React from 'react';

class Day extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            date: null,
        };
    }

    style = {
        height: "85px",
        width: "85px",
        border: "2px solid black",
        backgroundColor: "white"
    };

    

    handleClick = () => {
       this.setState({selected: !this.state.selected});
       this.props.clickedHandler(this.props.date.getDate());
    }

    renderSelected = () => {
        const {date, daySelected} = this.props;

        console.log("daySelected prop from parent: " + daySelected);
        console.log("date.getDate() " + date.getDate());

        return {
                 ...this.style,
                 backgroundColor: date.getDate() === daySelected ? "blue" : "white"
        };  
    }

    render(){
        const {date, daySelected} = this.props;
        console.log("selectedDate at Day: " + daySelected);

        return (
            <div style={this.renderSelected()}
            onClick={this.handleClick}>{date.getDate()}</div>
        );
    }
  
}

export default Day;