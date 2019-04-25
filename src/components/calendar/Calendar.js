    import React from 'react';
import Month from '../month/Month';

    class Calendar extends React.Component {

        constructor(props){
            super(props);
            this.state = {
                events: [],
                month: null,
                selectedDate: null,
                firstVisibleDate: null,
                lastVisibleDate: null,
            };
        }

        getClickedCallback = (dayClicked) => {
            this.setState({selectedDate: dayClicked});
        }

        render(){

            const {selectedDate} = this.state;
            console.log("selectedDate at Calendar: " + selectedDate);
            return (
                <div>
                    <div>Calendar {selectedDate}</div>
                    <Month 
                        clickedHandler={this.getClickedCallback}
                        daySelected={selectedDate}>
                    </Month>
                </div>
            )
        }
    
    }

    export default Calendar;